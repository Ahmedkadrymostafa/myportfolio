import React from 'react'
import ReactForm from '../components/react-form/ReactForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
}


const page = () => {
  return (
    <div className='relative z-10 main-margin max-sm:m-0'>
     
      <ReactForm />
      
    </div>
  )
}

export default page