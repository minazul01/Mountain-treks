
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';


const Detail = () => {
    // eslint-disable-next-line no-unused-vars
    const [showModal, setShowModal] = useState(false);

    const handleTalkWithExpert = () => {
        const now = new Date();
        const hour = now.getHours();
    
        if (now >= 10 && hour < 20) {
          // Google Meet Link open in new tab
          window.open("https://meet.google.com/hzk-bspe-mjd", "_blank");
        } else {
          // Show modal
          setShowModal(true);
        }
      };

    const singleData = useLoaderData();

    const { title, image, shortDescription, includedItems, specialInstructions, ecoFriendlyFeatures, adventureCost, adventureLevel, maxGroupSize } = singleData;

    return (
        <div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: `url(${image})`
                    ,
                }}
            >
                <div className='hero-overlay'></div>
                <div className='text-center space-y-24 text-neutral-content'>
                    <div className='space-y-5'>
                        <h1 className='text-3xl font-bold'>{title}</h1>
                        <p className='text-xl font-normal'>{shortDescription}</p>
                    </div>
                    <div className='space-y-5'>
                        <h3><span className='text-2xl font-bold'>adventureLevel : </span> <span className='text-xl font-normal'>{adventureLevel}</span></h3>
                        <h3 className='text-2xl font-bold'>Group-size : {maxGroupSize}</h3>
                        <h3 className='text-2xl font-bold'>adventureCost : ${adventureCost}</h3>
                    </div>
                    <div className='space-y-5'>
                        <h2><span className='text-2xl font-bold'>includedItems : </span> <span className='text-base font-normal'>{includedItems[0]}, {includedItems[1]}, {includedItems[2]}, {includedItems[3]}</span></h2>
                        <h2><span className='text-2xl font-bold'>ecoFriendlyFeatures : </span> <span className='text-base font-normal'>{ecoFriendlyFeatures[0]}, {ecoFriendlyFeatures[1]}, {ecoFriendlyFeatures[2]}, {ecoFriendlyFeatures[3]}</span></h2>
                        <h2><span className='text-2xl font-bold'>specialInstructions : </span> <span className='text-base font-normal'>{specialInstructions[0]}, {specialInstructions[1]}, {specialInstructions[2]}, {specialInstructions[3]}</span></h2>
                    <div onClick={handleTalkWithExpert} className='mt-10 py-1 px-3 bg-pink-400 rounded-md hover:bg-gray-50'><button className='cursor-pointer'>Talk with Expert</button></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;