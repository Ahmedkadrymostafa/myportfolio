'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Heading from '../main-heading/Heading';
import RecommendationCard from '../cards/RecommendationCard';
import { useState, useEffect } from 'react';
import { db } from '@/app/firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';

interface IRecommendationData {
  data: {
    img: string;
    name: string;
    job: string;
    message: string;
    rate: number;
  }
  id: string;
}
const Recommendations = (props: any) => {
  const [ recommendationData, setRecommendationData ] = useState<IRecommendationData[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const query = await getDocs(collection(db, "recommendations"))
      const dataArray: any = []
      query.forEach(item => {
        dataArray.push({data: item.data(), id: item.id})
      })
      setRecommendationData(dataArray)
    }
    fetchData()
  }, [])
  return (
    <div className='relative z-10 mt-6 mx-6 mb-10'>
        <Heading title={props.headingTitle} />

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
          {recommendationData.map(item => (
            <SwiperSlide key={item.id}>
              <RecommendationCard
                img={item.data.img}
                name={item.data.name}
                job={item.data.job}
                message={item.data.message}
                rate={item.data.rate} />                
            </SwiperSlide>

          ))}
        
                
        </Swiper>
    </div>
  )
}

export default Recommendations