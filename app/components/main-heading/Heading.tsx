import React from 'react'

const Heading = (props: any) => {
  return (
    <div>
        <h1 className='main-heading capitalize white text-xl font-bold mb-8 mt-11'>{props.title}</h1>
    </div>
  )
}

export default Heading