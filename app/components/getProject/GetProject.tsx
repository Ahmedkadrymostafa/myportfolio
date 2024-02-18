'use client'
import React from 'react'
import ProjectDetails from '../project-details/ProjectDetails'
import Recommendations from '../recommendations/Recommendations'
import Experience from '../experience/Experience'
import ProjectBanner from '../banners/ProjectBanner'
import MainBanner from '../banners/MainBanner'
import Footer from '../footer/Footer'
import { useState, useEffect } from 'react'
import { db } from '../../firebase/firebase'
import { doc, getDoc } from 'firebase/firestore'
import Loading from '../loading/Loading'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCube} from 'swiper/modules';
import Heading from '../main-heading/Heading'
import ServicesCard from '../cards/ProjectCard';
import NotFound from '@/app/not-found'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

// import './styles.css';

const GetProject = ( {params}: {params: any} ) => {
  const [ projectData, setProjectsData ] = useState<any>({})
  const [ fetched, setFetched ] = useState<Boolean>(false)
  const [ fetchedProp, setFetchedProp ] = useState<Boolean>(true)
  const [ waiting, setWaiting ] = useState<Boolean>(true)
  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "projects", params.project)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        setWaiting(false)
        setFetched(true)
        setProjectsData(docSnap.data())
      }else {
        setWaiting(false)
        setFetchedProp(false)
      }
    }
    
    fetchData()

 }, [params])


 return (
    <div>
        {waiting === true && <Loading />}

        {fetched === true &&
            <div>
            <ProjectBanner headingTitle={projectData.title} livelink={projectData.livelink} mainimg={projectData.mainimg} />
            <ProjectDetails description={projectData.description}
              orderdate={projectData.orderdate}
              finaldate={projectData.finaldate}
              status={projectData.status}
              client={projectData.client}
              location={projectData.location}
             />



          <div className='relative z-10 mt-6 mx-6'>
                  <Heading title="result" />

                  {/* <Swiper
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
                      {projectData.projectimgs.map((img: any) => (
                        <SwiperSlide key="image slider">
                          <ServicesCard img={img} />
                            
                        </SwiperSlide>
                        
                      ))}

                  </Swiper> */}


            <Swiper
                    effect={'cube'}
                    grabCursor={true}
                    pagination={{
                      clickable: true,
                    }}
                    cubeEffect={{
                      shadow: false,
                      slideShadows: false,
                      shadowOffset: 20,
                      shadowScale: 0.94,
                    }}
                    modules={[EffectCube, Pagination]}
                    className="mySwiper"
                  >
                    {projectData.projectimgs.map((img: any) => (
                        <SwiperSlide key="image slider">
                          <ServicesCard img={img} />
                            
                        </SwiperSlide>
                        
                      ))}
                    
                  </Swiper>
            </div>

            <Recommendations headingTitle="client reviews" />
            <Experience />
            <MainBanner />
            <Footer />
          </div>
        }

        {fetchedProp === false && <NotFound />}
    </div>
  )
}

export default GetProject