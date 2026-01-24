import { NavBar } from '../components/NavBar';
import { TravelRecContainer } from '../components/TravelRecContainer';

export const RecommendationPage = () => {

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