import { Link } from 'react-router'

export const NavBar = () => {
    return (
        <header>
            <nav className='py-5 bg-red-200 flex justify-between items-center'>
                <h1 className='ml-20 text-2xl'>All Voyager</h1>
                <ul className='mr-20 text-xl flex gap-10'>
                    <li><Link to='/flights'>Flights</Link></li>
                    <li><Link to='/hotels'>Hotels</Link></li>
                </ul>
            </nav>
        </header>
    )
}