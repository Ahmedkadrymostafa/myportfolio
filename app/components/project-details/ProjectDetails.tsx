import React from 'react'
import Heading from '../main-heading/Heading'

const ProjectDetails = (props: any) => {
  return (
    <div className='relative z-10 main-margin'>
        <Heading title="project details" />
        <div className='main-bg p-8'>
            <div className='mb-6'>
                <p className='white text-base capitalize mb-3'>description</p>
                <p className='light-gray text-sm'>{props.description}</p>
            </div>
            <hr className='light-line' />
            <div className='flex'>
                <div className='mr-7'>
                    <p className='white text-sm capitalize mb-1'>order date:</p>
                    <p className='white text-sm capitalize mb-1'>final date:</p>
                    <p className='white text-sm capitalize mb-1'>status:</p>
                    <p className='white text-sm capitalize mb-1'>client:</p>
                    <p className='white text-sm capitalize mb-1'>location:</p>
                </div>
                <div>
                    <p className='light-gray text-sm mb-1'>{props.orderdate}</p>
                    <p className='light-gray text-sm mb-1'>{props.finaldate}</p>
                    <p className='light-gray text-sm mb-1 capitalize'>{props.status}</p>
                    <p className='light-gray text-sm mb-1 capitalize'>{props.client}</p>
                    <p className='light-gray text-sm mb-1 capitalize'>{props.location}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectDetails