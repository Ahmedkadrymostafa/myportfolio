'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Heading from '../main-heading/Heading';
import ServicesCard from '../cards/ProjectCard';

const ProjectTitle = () => {
  return (
    <div className='relative z-10 mt-6 mx-6'>
        <Heading title="result" />

        <Swiper
        cssMode={true}
        slidesPerView={2}
        navigation={true}
        pagination={{
            clickable: true,
        }}
        breakpoints={{
            1: {
            slidesPerView: 1,
            spaceBetween: 20,
            },
            768: {
            slidesPerView: 2,
            spaceBetween: 20,
            },
        }}
        mousewheel={true}
        keyboard={true}

        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        >
        <SwiperSlide>
           <ServicesCard />
            
        </SwiperSlide>
        
        <SwiperSlide>
           <ServicesCard />
            
        </SwiperSlide>
        
        <SwiperSlide>
           <ServicesCard />
            
        </SwiperSlide>
        
        
       
        
                
        </Swiper>
    </div>
  )
}

export default ProjectTitle