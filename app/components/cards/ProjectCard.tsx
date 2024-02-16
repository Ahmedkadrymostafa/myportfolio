/* eslint-disable @next/next/no-img-element */
import Image from "next/image"

const ServicesCard = (props: any) => {
  return (
    <div>
        <div className=" card  mb-14 mr-6 mx-auto overflow-hidden h-60 max-[768px]:w-full">
            <Image className="img-card duration-500 h-64 w-full"  width={2000} height={2000} src={props.img} alt="project image" />                       
        </div>
    </div>
  )
}

export default ServicesCard