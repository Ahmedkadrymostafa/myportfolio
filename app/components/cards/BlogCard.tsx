'use client'
import Link from "next/link";
import { useRef } from "react";
import Image from "next/image";
const BlogCard = (props: any) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);
    let bounds: any;

  function rotateToMouse(e: any) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2
    }
    const distance = Math.sqrt(center.x**2 + center.y**2);

    if (cardRef.current && glowRef.current) {
        cardRef.current.style.transform = `
            scale3d(1.07, 1.07, 1.07)
            rotate3d(
              ${center.y / 100},
              ${-center.x / 100},
              0,
              ${Math.log(distance)* 4}deg
            )
        `;

        glowRef.current.style.backgroundImage = `
        radial-gradient(
            circle at
            ${center.x * 2 + bounds.width/2}px
            ${center.y * 2 + bounds.height/2}px,
            #ffffff55,
            #0000000f
        )
        `;
        
      }
      
    
  }

  function handleMouseEnter() {
    if (cardRef.current) {
        bounds = cardRef.current.getBoundingClientRect();
        document.addEventListener('mousemove', rotateToMouse);
        
    }
  }

  function handleMouseLeave() {
    if (cardRef.current && glowRef.current) {
        document.removeEventListener('mousemove', rotateToMouse);
        cardRef.current.style.transform = '';
        glowRef.current.style.backgroundImage = '';
    }
    
  }

    
   
  return (
    
      <div className={`w-${props.width} max-[768px]:w-full`}>
        <Link href={`/blogs/${props.link}`} className="">
          <div ref={cardRef}
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
            className="relative duration-200">
              <div className="flex flex-col">
                <Image src={props.img} className="w-auto" priority={true} width={330} height={210} alt="blog image"/>
                <div className="main-bg p-3 flex flex-col gap-2 w-full">
                    <p className="yellow w-fit ml-auto text-xs">{`Published ${props.date}`}</p>
                    <p className="white line-clamp-2 text-ellipsis">{props.title}</p>
                    <p className="text-sm light-gray capitalize">{`by ${props.author}`}</p>
                </div>
              </div>
            <div ref={glowRef} className="glow-card"></div>
          </div>
        </Link>
      </div>
    
  )
}

export default BlogCard