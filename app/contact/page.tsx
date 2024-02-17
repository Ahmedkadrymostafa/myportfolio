import React from 'react'
import ReactForm from '../components/react-form/ReactForm'
import { Metadata } from 'next'
import Footer from '../components/footer/Footer'

export const metadata: Metadata = {
  title: 'Contact',
}


const page = () => {
  return (
    <div className='relative z-10 max-sm:m-0'>
     
      <ReactForm />
      <Footer />
    </div>
  )
}

export default page