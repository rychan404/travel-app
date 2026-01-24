from fastapi import FastAPI
from fast_flights import FlightData, Passengers, get_flights
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import Response
import requests
import pandas as pd
from bs4 import BeautifulSoup
import wikipediaapi
import re

app = FastAPI()

origins = [
    "http://localhost:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/recommend/{community}/{budget}")
async def recommend(community: str, budget: float):
    # Read the CSV files
    worldcities = pd.read_csv('worldcities.csv')
    cost_of_living = pd.read_csv('cost-of-living.csv')

    # Define the columns to add from cost-of-living
    columns_to_add = ['x1', 'x2', 'x3', 'x4', 'x6', 'x8', 'x28', 'x30', 'x31', 'x48', 'x49', 'x41']

    # Select only the necessary columns from cost-of-living (city, country, and the columns to add)
    cost_of_living_subset = cost_of_living[['city', 'country'] + columns_to_add]
        
    # Drop rows with missing data in any of the specified columns
    cost_of_living_subset = cost_of_living_subset.dropna(subset=columns_to_add).copy()
    
    cost_of_living_subset['cost'] = cost_of_living_subset[columns_to_add].apply(
        pd.to_numeric, errors='coerce'
    ).sum(axis=1, skipna=True)
    
    
    # Keep only city, country, and the summed column
    cost_of_living_subset = cost_of_living_subset[['city', 'country', 'cost']]

    # Perform a merge (inner join) to filter worldcities and add the columns
    # This will only keep rows from worldcities that have matching city-country pairs in cost-of-living
    filtered_worldcities = worldcities.merge(
        cost_of_living_subset,
        left_on=['city_ascii', 'country'],
        right_on=['city', 'country'],
        how='inner'
    )

    # Drop the duplicate 'city_x' and 'city_y' columns (we already have city_ascii)
    columns_to_drop = [col for col in ['city_x', 'city_y'] if col in filtered_worldcities.columns]
    if columns_to_drop:
        filtered_worldcities = filtered_worldcities.drop(columns=columns_to_drop)

    print(len(filtered_worldcities))
    # Filter by population (community) & budget 
    if community == "urban":
        filtered_worldcities = filtered_worldcities[filtered_worldcities["population"] >= 20000]
    elif community == "rural":
        filtered_worldcities = filtered_worldcities[filtered_worldcities["population"] < 20000]
    filtered_worldcities = filtered_worldcities[(budget >= filtered_worldcities["cost"])]

    columns_to_drop = ['lat','lng','iso2','iso3','admin_name','capital','population','id', 'cost']
    filtered_worldcities.drop(columns=columns_to_drop, inplace=True)
    
    print(len(filtered_worldcities))

    # Save the filtered result
    filtered_worldcities.to_csv('filtered_worldcities.csv', index=False)

    result = filtered_worldcities.to_json(orient='records', indent=4)
    
    return Response(content=result, media_type="application/json")

@app.get("/locationDetails/{location}")
async def getLocationDetails(location: str):
    wikipedia = wikipediaapi.Wikipedia(user_agent='MyProjectName (merlin@example.com)', language='en')

    page = wikipedia.page(location)

    if page.exists():
        summary = page.summary.strip()
    
        url = 'https://en.wikipedia.org/w/api.php'
        params = {
            "action": "parse",
            "page": location,
            "format": "json"
        }

        headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        }

        response = requests.get(url, params=params, headers=headers)
        data = response.json()
        html_data = data["parse"]["text"]["*"]
        soup = BeautifulSoup(html_data, 'html.parser')

        image_url = soup.find('img').attrs['src']
        image_url = 'https:' + re.sub(r'\d+px', '500px', image_url)
    else:
        summary = "No information found."
        image_url = ""

    return { 
        "name": location,
        "description": summary, 
        "img_url": image_url
    }