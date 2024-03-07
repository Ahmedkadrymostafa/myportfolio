import React from 'react'
import Heading from '../components/main-heading/Heading'
import BlogCard from '../components/cards/BlogCard'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/firebase'
import Footer from '../components/footer/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blogs',
  description: 'Read my blogs and see the latest technology news and events',
  openGraph: {
    title: 'Blogs - Ahmed Kadry',
    description: 'Read my blogs and see the latest technology news and events',
    url: 'https://www.akadry.me',
    siteName: 'Ahmed Kadry',
    images: '/opengraph-image.png',
    type: 'website',
  },
  twitter: {
    title: 'Ahmed Kadry - Blogs',
    description: 'Read my blogs and see the latest technology news and events',
    site: 'Ahmed Kadry',
    creator: "@AhmedKadry",
    images: [
      {
        url: 'https://www.akadry.me/twitter-image.png', // Must be an absolute URL
        width: 1200,
        height: 630,
        alt: "Read my blogs and see the latest technology news and events"
      },
      
    ],
  },
}

const page = async () => {

  let blogs: any = [];
  const querySnapshot = await getDocs(collection(db, "blogs"))
    
  querySnapshot.forEach((doc) => {
    blogs.push({data: doc.data(), id: doc.id})
  })
  return (
    <div>
      <div className='relative z-10 m-6'>
        <Heading title="Blogs" />
        <div className='flex flex-wrap gap-9'>
          {
            blogs.map((data: any) => (
              <BlogCard width={80} key={data.id} link={data.id} img={data.data.imgurl} title={data.data.title} date={data.data.publishDate} author={data.data.author} />
            ))
            
          }
            
        </div>
      </div>
        <Footer />
    </div>
  )
}
export const revalidate = 60
export default page