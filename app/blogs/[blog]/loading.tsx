import React from 'react'

const Loading = () => {
  return (
    <div className='absolute z-10 center-loading'>
        <div className="loader">
            <div className="inner one"></div>
            <div className="inner two"></div>
            <div className="inner three"></div>
        </div>

    </div>
  )
}

export default Loading