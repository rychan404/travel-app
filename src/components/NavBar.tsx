import { Link } from 'react-router'
import Logo from '../assets/all-voyager-logo.png'

export const NavBar = () => {
    return (
        <header>
            <nav className='py-5 bg-teal-50 flex justify-between items-center'>
                <Link to='/'><img className='ml-20 w-50' src={Logo} alt="" /></Link>
                <ul className='mr-20 text-2xl text-sky-700 flex gap-10 font-[Roboto] font-medium'>
                    <li><Link to='/recommend'>Recommend</Link></li>
                    <li><Link to='/flights'>Flights</Link></li>
                </ul>
            </nav>
        </header>
    )
}