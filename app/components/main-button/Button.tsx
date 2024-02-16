import React from 'react'
import Link from "next/link"
import { FaAngleRight } from "react-icons/fa";

const Button = (props: any) => {
  return (
    <div>
        <Link href={props.link}>
            <button className='flex items-center w-fit uppercase text-xs yellow tracking-widest'>
                <span className="hover:mr-1 hover:underline duration-300">{props.title}</span>
                <FaAngleRight />
            </button>
        </Link>
    </div>
  )
}

export default Button