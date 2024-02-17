import Image from "next/image"
import face from "../../assets/face-1.jpg"
import { TiStarFullOutline } from "react-icons/ti";

const RecommendationCard = (props: any) => {
  return (
    <div>
        <div className="relative p-5 main-bg mt-6 mb-9 h-[16rem] max-[768px]:w-full">
                <div className='absolute -top-6 right-8'>
                    <Image className='rounded-full' src={props.img} width={85} height={83} alt='rater image' />
                </div>
                <div className="flex flex-col justify-between h-full">
                  <div className="flex flex-col">
                    <div className="mb-4">
                        <h1 className='capitalize white mb-0.5'>{props.name}</h1>
                        <p className='capitalize light-gray text-xs'>{props.job}</p>
                    </div>
                    <p className='light-gray text-sm mb-4 leading-5 line-clamp-6 text-ellipsis'>{props.message}</p>
                  </div>
                  <div className='dark-bg flex py-1 px-4 rounded-2xl w-fit'>
                      
                          <span className='yellow'><TiStarFullOutline /></span>
                          <span className='yellow'><TiStarFullOutline /></span>
                          <span className='yellow'><TiStarFullOutline /></span>
                          {
                            props.rate === 4 ?
                            <div className="flex">
                              <span className='yellow'><TiStarFullOutline /></span>
                              <span className='light-gray'><TiStarFullOutline /></span>
                            </div> 
                            :
                            <div className="flex">
                              <span className='yellow'><TiStarFullOutline /></span>
                              <span className='yellow'><TiStarFullOutline /></span>
                            </div> 
                          }
                          
                      
                  </div>
                </div>
          </div>
    </div>
  )
}

export default RecommendationCard