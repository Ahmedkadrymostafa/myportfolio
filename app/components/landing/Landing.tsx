'use client'
import Image from "next/image"
import { TypeAnimation } from 'react-type-animation';
import Link from "next/link";


const Landing = (props: any) => {
    
  return (
    <div className='landing-bg relative flex justify-evenly z-10 m-6'>
        <div className='landing-content flex flex-col mt-12 mb-8 pl-8'>
            <h1 className='capitalize text-white text-5xl w-3/4 font-black mt-8 mb-5 max-lg:w-full max-sm:text-3xl'>{props.landingtitle}</h1>
            <div className='code-animation mb-7'>
                <span className="text-white">&lt;<span className="yellow">code</span>&gt;</span>

                <span className="text-white text-base capitalize">

               
                    <TypeAnimation
                    sequence={props.sequence}
                    
                    wrapper="span"
                    speed={30}
                    
                    repeat={Infinity}
                    />
                
                
                </span>
                <span className="text-white">&lt;/<span className="yellow">code</span>&gt;</span>
            </div>
            <div>
                <Link href="#projects">
                    <button className="button">explore now</button>
                </Link>
            </div>
        </div>
        {/* <div className="img-landing h-fit w-fit">
            <Image src={props.landingimg} className="mt-5" alt="owner image" width={470} height={380} />
        </div> */}
    </div>
  )
}

export default Landing