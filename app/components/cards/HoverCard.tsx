'use client'
import Link from "next/link";
import { useRef } from "react";
import { FaAngleRight } from "react-icons/fa6";

export default function HoverCard(props: any) {
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
              ${-center.y * 4},
              ${center.x * 4},
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
      <div>
        <Link href="/contact" className="w-[26rem] h-52 inline-block max-[768px]:w-full">
          <div ref={cardRef}
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
            className="relative main-bg service-card h-full">
            <div className="flex flex-col relative z-10 justify-between p-5 h-full">
              <div>
                  <h1 className='capitalize text-lg white mb-4'>{props.name}</h1>
                  <p className='light-gray text-sm mb-4 leading-5 '>{props.content}</p>
              </div>
              <Link href="/contact">
                  <button className='flex items-center w-fit uppercase text-sm yellow tracking-widest'>
                      <span className="hover:mr-1 hover:underline duration-300">order now</span>
                      <FaAngleRight />
                  </button>
              </Link>
            </div>
            <div ref={glowRef} className="glow-card"></div>
          </div>
        </Link>
      </div>
    )
}