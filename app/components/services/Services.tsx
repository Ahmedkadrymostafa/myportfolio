'use client'
import { FaAngleRight } from "react-icons/fa";
import Link from "next/link";
import Heading from "../main-heading/Heading";
import { useState, useEffect } from "react";
import { db } from "@/app/firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

interface IServicesData {
    data: {
        name: string;
        content: string;
    }
    id: string;
}

const Services = () => {
    const [servicesData, setServicesData] = useState<IServicesData[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const query = await getDocs(collection(db, "services"))
            const servicesArray: any = []

            query.forEach((doc) => {
                servicesArray.push({data: doc.data(), id: doc.id})
            })
            setServicesData(servicesArray)
        }
        fetchData()
        
    }, [])
  return (
    <div className="relative z-10 m-6">
        <Heading title="my services" />
        <div className="flex justify-between flex-wrap gap-8">

            {
                servicesData.map((item) => (
                    <div key={item.id} className="flex flex-col justify-between p-5 main-bg  service-card">
                        <div>
                            <h1 className='capitalize white mb-4'>{item.data.name}</h1>
                            <p className='light-gray text-xs mb-4 leading-5 '>{item.data.content}</p>
                        </div>
                        <Link href="/contact">
                            <button className='flex items-center w-fit uppercase text-xs yellow tracking-widest'>
                                <span className="hover:mr-1 hover:underline duration-300">order now</span>
                                <FaAngleRight />
                            </button>
                        </Link>
                    </div>
                ))
            }


        </div>
    </div>
  )
}

export default Services