import heroBkg from '../assets/hero-bkg.mp4'
import { Link } from 'react-router'

export const HeroContainer = () => {
    return (
        <div className='relative w-screen'>
            <video className='w-full h-[70vh] object-cover blur-[2px]' src={heroBkg} autoPlay loop muted></video>
            <div className='absolute inset-0 flex flex-col justify-center items-center'>
                <h1 className='text-8xl text-orange-100 font-[Roboto]'>Explore <strong>More</strong>.</h1>
                <h1 className='text-8xl text-orange-100 font-[Roboto]'>Spend <strong>Less</strong>.</h1>
                <p className='text-xl text-orange-100 mt-10 font-[Roboto]'>Plan smarter trips with real costs, real cities, and zero guesswork.</p>
                <button className='bg-red-400 rounded-xl text-lg text-red-950 px-5 py-2.5 mt-10 font-[Roboto]'><Link to='/recommend'>Start Exploring</Link></button>
            </div>
        </div>
    )
}