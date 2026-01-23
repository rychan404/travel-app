import { NavBar } from '../components/NavBar';
import { PlusMinusInput } from '../components/PlusMinusInput';
import { TravelRecContainer } from '../components/TravelRecContainer';

export const RecommendationPage = () => {

    // const travelers: string[] = ['Adult', 'Children', 'Infant on Seat', 'Infant on Lap'];

    return (
        <div className='bg-teal-50'>
            <NavBar/>
            <main className='mt-20 flex flex-col items-center h-screen'>
                <h1 className='text-5xl font-[Roboto]'>Travel Pick Just for <em>You</em></h1>
                <TravelRecContainer/>
            </main>
        </div>
    );
}

/*
<div className='p-5 flex justify-center items-center flex-col'>
                    <h1 className='text-3xl mb-4'>Find your destination</h1>
                    <div className='flex gap-2'>
                        <div className='flex flex-col'>
                            <label htmlFor="where-to">Where To?</label>
                            <input className='border-1 p-1 rounded-md' type="text" placeholder="Go to your happy place..."/>
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="departure-date">Departure Date</label>
                            <input className='border-1 p-1 rounded-md' type="date" />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="trip">Trip</label>
                            <select className="border-1 p-1 rounded-md" name="trip" id="trip">
                                <option value="one-way">One-way</option>
                                <option value="round-trip">Round-trip</option>
                            </select>
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="seat">Seat</label>
                            <select className="border-1 p-1 rounded-md" name="seat" id="seat">
                                <option value="economy">Economy</option>
                                <option value="premium-economy">Premium Economy</option>
                                <option value="business">Business</option>
                                <option value="first">First</option>
                            </select>
                        </div>
                    </div>
                    <div className='mt-5 flex gap-5'>
                        {
                            travelers.map((traveler, id) => (
                                <PlusMinusInput key={id} label={traveler}/>
                            ))
                        }
                        <button>Go</button>
                    </div>
                </div>
*/