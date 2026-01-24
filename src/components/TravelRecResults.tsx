import { Link } from "react-router"

export const TravelRecResults = ({ results, setResultsShown }: any) => {
    
    setResultsShown(true)

    return (
        <>
            <h1 className='text-2xl mt-10'>Travel to...</h1>
            <div className='mt-5 bg-amber-200 w-[50ch] max-h-[10rem] p-5 overflow-auto rounded-md shadow-md'>
                {
                    results.length ? (
                        results.map((location: any, id: any) => (
                            <p className='text-xl' key={id}><Link to={`/location/${location.city_ascii}`} state={{ name: location.city_ascii} }>{location.city_ascii}, {location.country}</Link></p>
                        ))
                    ) : (
                        <p className='text-xl'>No Results</p>
                    )
                }
            </div>
        </>
    )
}