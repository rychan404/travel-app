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