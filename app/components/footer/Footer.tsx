import React from 'react'
import { GiCoffeeCup } from "react-icons/gi";

const Footer = () => {
  return (
    <div className='relative z-10 main-bg main-margin flex flex-col justify-center items-center py-4 max-[425px]:mb-28 max-sm:mx-0'>
        <p className='light-gray text-xs mb-1'>Copyright © 2024 Ahmed Kadry</p>
        <div className='flex items-center light-gray text-xs'>
          <p className='mr-1'>Made with Caffeine</p>
          <GiCoffeeCup />
        </div>
    </div>
  )
}

export default Footer