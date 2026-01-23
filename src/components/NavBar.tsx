import { Link } from 'react-router'
import Logo from '../assets/all-voyager-logo.png'

export const NavBar = () => {
    return (
        <header>
            <nav className='py-5 flex justify-between items-center bg-white'>
                <Link to='/'><img className='ml-20 w-40' src={Logo} alt="" /></Link>
            </nav>
        </header>
    )
}

/*
                <ul className='mr-20 text-2xl text-sky-700 flex gap-10 font-[Roboto] font-medium'>
                    <li><Link to='/recommend'>Recommend</Link></li>
                    <li><Link to='/flights'>Flights</Link></li>
                </ul>
*/