from fastapi import FastAPI
from fast_flights import FlightData, Passengers, get_flights
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import Response
import requests
import pandas as pd

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

@app.get("/recommend/{climate}/{community}/{budget}")
async def recommend(climate: str, community: str, budget: int):
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
    """
    df = pd.read_csv('worldcities.csv')

    # Filter by population (community)
    latsList = []
    lngsList = []
    for _, row in df.iterrows():
        if (community == "urban" and row["population"] >= 20000) or (community == "rural" and row["population"] < 20000):
            latsList.append(str(row['lat']))
            lngsList.append(str(row['lng']))

    
    url = "https://cost-of-living-and-prices.p.rapidapi.com/prices"

    querystring = {"city_name":"Bratislava","country_name":"Slovakia"}

    headers = {
        "x-rapidapi-key": "",
        "x-rapidapi-host": "cost-of-living-and-prices.p.rapidapi.com"
    }

    response = requests.get(url, headers=headers, params=querystring)

    print(len(latsList))
    print(len(lngsList))

    lats = ",".join(latsList)
    lngs = ",".join(lngsList)

    #url = f"https://api.open-meteo.com/v1/forecast/?latitude=60.2,32.3&longitude=12.2,-12.2&current=temperature_2m"
    #response = requests.get(url)
    """

@app.get("/flights/")
async def get_flight_results():
    def best_flight_list(FlightData):
        data = [FlightData]
        shortData = []
        for i in range(5):
            shortData[i] = data[i]
        return shortData

    result = get_flights(
        flight_data=[
            FlightData(date="2026-01-20", from_airport="JFK", to_airport="CDG")
        ],
        trip="one-way",
        seat="economy",
        passengers=Passengers(adults=1, children=0, infants_in_seat=0, infants_on_lap=0),
        fetch_mode="fallback",
    )
    def get_price(FlightData):
        return FlightData.price
    #result.flights.sort(key=get_price)

    def shorten_flights(List):
        shortFlight = []
        for i in range(5):
            shortFlight.append(List[i])
        return shortFlight
    
    result.flights = shorten_flights(result.flights)
    #print(result.flights[0])
    return result

@app.get("/")
async def root():
    return {"message": "Travel App API - Use /flights endpoint to get flight results"}