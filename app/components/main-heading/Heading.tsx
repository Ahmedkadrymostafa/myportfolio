import React from 'react'

const Heading = (props: any) => {
  return (
    <div>
        <h1 className='main-heading w-fit capitalize white text-xl font-bold mb-8 mt-11 max-[1124px]:mx-auto'>{props.title}</h1>
    </div>
  )
}

export default Heading