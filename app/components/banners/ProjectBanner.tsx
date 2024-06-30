/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import Heading from "../main-heading/Heading"
import Link from "next/link"
import { FaEye } from "react-icons/fa6"

const ProjectBanner = (props: any) => {
  return (
    <div className='relative z-10 main-margin'>
        <Heading title={props.headingTitle} />
        <div className="card overflow-hidden">
            <Image src={props.mainimg} width={2000} height={2000} className="img-card duration-500 h-96 w-full max-[768px]:h-56" alt="project image banner" />
            {props.livelink !== "" && 
              <div className="absolute main-bg px-4 py-2  bottom-0">
                  <Link href={props.livelink} className="yellow text-sm flex items-center">Live<FaEye className="ml-1" /></Link>               
              </div>       
            }
        </div>
        
    </div>
  )
}

export default ProjectBanner