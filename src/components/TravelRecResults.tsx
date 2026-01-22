
export const TravelRecResults = ({ results }: any) => {
    return (
        <div className='bg-red-500 w-2xl'>
            {
                results.map((location: any, id: any) => (
                    <h1 key={id}>{location.city_ascii}, {location.country}</h1>
                ))
            }
        </div>
    )
}