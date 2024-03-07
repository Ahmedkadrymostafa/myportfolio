"use client"
import React from 'react'
import Heading from '../main-heading/Heading'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '@/app/firebase/firebase';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
const GetBlogs = () => {
    const [ blogsData, setBlogsData ] = useState<any>([]);

    useEffect(() => {
        const GetData = async () => {
            const q = query(collection(db, "blogs"), where("featured", "==", true))
          const querySnapshot = await getDocs(q);
          let blogs: any = [];

          if (querySnapshot) {
            querySnapshot.forEach((doc) => {
              blogs.push({id: doc.id, data: doc.data()})
            });
            setBlogsData(blogs)
          }else {
            console.log("no data found")
          }
        }
        GetData()
    }, [])
  return (
    <div className='relative main-margin'>
        <Heading title="Featured Blogs" />
        
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
            1124: {
            slidesPerView: 3,
            spaceBetween: 20,
            },
           
        }}
        mousewheel={true}
        keyboard={true}

        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        >
        
        {
            blogsData.map((doc: any) => (
                <SwiperSlide  key={doc.id} >
                    <div className='mb-11 w-fit mx-auto'>
                        <div className="w-64 max-[768px]:w-full">
                            <Link href={`/blogs/${doc.id}`}>
                              <div>                               
                                  <div className="flex flex-col">
                                    <Image src={doc.data.imgurl} className="w-auto" priority={true} width={330} height={210} alt="blog image"/>
                                    <div className="main-bg p-3 flex flex-col gap-2 w-full">
                                        <p className="yellow w-fit ml-auto text-xs">{`Published ${doc.data.publishDate}`}</p>
                                        <p className="white line-clamp-2 text-ellipsis">{doc.data.title}</p>
                                        <p className="text-sm light-gray capitalize">{`by ${doc.data.author}`}</p>
                                    </div>
                                  </div>
                              </div>
                            </Link>
                          </div>
                    </div>
                </SwiperSlide>
            ))
        }
                
        </Swiper>
    </div>
  )
}

export default GetBlogs