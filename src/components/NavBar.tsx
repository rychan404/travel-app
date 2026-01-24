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