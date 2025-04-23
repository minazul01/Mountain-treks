

import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";



const PopularCard = ({ data }) => {

    

    const { categoryName, image, location, rating, duration, title, id} = data;

    return (
        <div>
            
            <div className='max-w-[800px] relative'>
                <img className='w-[400px] h-[300px] md:w-[700px] md:h-[400px] mx-auto rounded-lg' src={image} alt={categoryName} />
                <div className='absolute bottom-2 left-5 md:bottom-6 md:left-5 space-y-1'>
                    <h2 className='text-xl font-bold text-white'>{title}</h2>
                    <h3 className="text-base font-normal text-white">{location}</h3>
                    <h3 className="text-base font-normal text-white">{duration}</h3>
                    <Link to={`/detail/${id}`}><button className="py-1 px-3 bg-orange-300 rounded-lg hover:bg-gray-200 cursor-pointer">Explore trip</button></Link>
                </div>
                <div className='flex flex-row gap-2 items-center absolute top-0 right-4 md:top-2 md:right-0 p-1 bg-black text-orange-300'>
                    <FaStar />
                    <p>{rating}</p>
                </div>
            </div>
        </div>
    );
};

export default PopularCard;