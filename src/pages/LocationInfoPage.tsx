import { NavBar } from '../components/NavBar'
import { useLocation } from 'react-router'
import { useState, useEffect } from 'react'

export const LocationInfoPage = () => {
    const location = useLocation();
    const { state } = location;
    const { name } = state;

    const [locationData, setLocationData] = useState({ name: "", description: "", img_url: "" });

    useEffect(() => {
        async function getData() {
            try {
                const response = await fetch(`http://localhost:8000/locationDetails/${name}`);
                const data = await response.json();
                setLocationData(data)
            } catch (error) {
                console.log(error)
            }
        }

        getData();
    }, [])

    return (
        <>
            <NavBar/>
            <main className='mt-10 flex justify-center items-center h-auto'>
                <div className='w-3xl bg-amber-100 rounded-xl shadow-lg p-10 h-[60vh] overflow-auto'>
                    <img src={locationData.img_url} alt="" />
                    <div className='mt-3'>
                        <h1 className='text-3xl font-semibold'>{name}</h1>
                        <p className='mt-3 text-sm'>{locationData.description}</p>
                    </div>
                </div>
            </main>
        </>
    )
}