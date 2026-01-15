from fastapi import FastAPI
from fast_flights import FlightData, Passengers, get_flights
from fastapi.middleware.cors import CORSMiddleware

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

@app.get("/flights/")
async def get_flight_results():
    result = get_flights(
        flight_data=[
            FlightData(date="2026-01-15", from_airport="JFK", to_airport="CDG")
        ],
        trip="one-way",
        seat="economy",
        passengers=Passengers(adults=1, children=0, infants_in_seat=0, infants_on_lap=0),
        fetch_mode="fallback",
    )
    
    return result


@app.get("/")
async def root():
    return {"message": "Travel App API - Use /flights endpoint to get flight results"}