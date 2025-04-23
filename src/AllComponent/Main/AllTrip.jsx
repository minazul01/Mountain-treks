

import AllTripCard from './AllTripCard';
import { useLoaderData } from 'react-router-dom';


const AllTrip = () => {

    const data = useLoaderData();


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
            {
                data.map((data) => <div key={data.id}><AllTripCard data={data}></AllTripCard></div>)
            }
        </div>
    )

}

export default AllTrip;