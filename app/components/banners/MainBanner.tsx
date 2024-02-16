import Link from 'next/link'
import React from 'react'

const MainBanner = () => {
  return (
    <div className='main-banner relative z-10 main-margin h-72'>
        <div className="absolute main-banner-overlay h-full w-full opacity-60"></div>
        <div className='relative flex flex-col gap-y-4 mx-auto z-10 w-80 top-1/4 text-center'>
            <h1 className='text-white text-3xl font-bold'>Ready to order your project?</h1>
            <p className='text-white text-lg'>let&apos;s work together!</p>
            <Link href="/contact"><button className="button">contact me</button></Link>
        </div>
    </div>
  )
}

export default MainBanner