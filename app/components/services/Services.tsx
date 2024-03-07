'use client'
import Heading from "../main-heading/Heading";
import { useState, useEffect, useRef } from "react";
import { db } from "@/app/firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import HoverCard from "../cards/HoverCard";

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
        <div className="flex justify-around flex-wrap gap-8">

            {
                servicesData.map((item) => (
                    <HoverCard key={item.id} name={item.data.name} content={item.data.content} />
                ))
            }
            
        </div>
    </div>
  )
}

export default Services