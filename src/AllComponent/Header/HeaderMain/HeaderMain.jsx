import React, { useContext, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import './styles.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { context } from '../../MainLayout/MainLayout';


export default function HeaderMain() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    // authcontext use
    const contextData = useContext(context);
    const data = contextData.data;
  
    return (
        <>
        
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2 max-w-[450px] md:max-w-[1450px] h-[300px] md:h-[500px] rounded-lg"
            >
                <div>
                    {
                        data.map(({ image, id}) => (
                            <div>
                                <div>
                                    <SwiperSlide key={id}>
                                        <img src={image} />
                                    </SwiperSlide>
                                </div>
                            </div>
                        ))
                    }
                </div>
               
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                
                <SwiperSlide>
                    <img className='w-[350px] h-[50px] md:h-[100px]' src={data[0].image} />
                </SwiperSlide>
                <SwiperSlide>
                <img className='w-[350px] h-[50px] md:h-[100px]' src={data[1].image} />
                </SwiperSlide>
                <SwiperSlide>
                <img className='w-[350px] h-[50px] md:h-[100px]' src={data[2].image} />
                </SwiperSlide>
                <SwiperSlide>
                <img className='w-[350px] h-[50px] md:h-[100px]' src={data[3].image} />
                </SwiperSlide>
                <SwiperSlide>
                <img className='w-[350px] h-[50px] md:h-[100px]' src={data[4].image} />
                </SwiperSlide>
                <SwiperSlide>
                <img className='w-[350px] h-[50px] md:h-[100px]' src={data[5].image} />
                </SwiperSlide>
                <SwiperSlide>
                <img className='w-[350px] h-[50px] md:h-[100px]' src={data[6].image} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-[350px] h-[50px] md:h-[100px]' src={data[7].image} />
                </SwiperSlide>
                <SwiperSlide>
                <img className='w-[350px] h-[50px] md:h-[100px]' src={data[8].image} />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
