/* eslint-disable @next/next/no-img-element */
import Image from "next/image"

const ServicesCard = (props: any) => {
  return (
    <div>
        <div className="card  mb-14 mr-6 mx-auto overflow-hidden max-[768px]:w-full">
            <Image className="duration-500 h-full max-h-[30rem] w-full max-[425px]:h-52"  width={2000} height={2000} src={props.img} alt="project image" />                       
        </div>
    </div>
  )
}

export default ServicesCard