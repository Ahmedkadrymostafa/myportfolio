'use client'
import CountUp from 'react-countup';
import { db } from '@/app/firebase/firebase';
import { useState, useEffect } from 'react'
import { doc, getDoc } from "firebase/firestore"

const Experience = () => {
    const [ experienceData, setExperienceData ] = useState<any>({});
    
    useEffect(() => {
        const fetchExperienceData = async () => {
            const docRef = doc(db, "landing", "5cGCewtqpayrnhKXgbbO")
            const docSnap = await getDoc(docRef);
            const result = docSnap.data();
                  if (docSnap.exists()) {
                      setExperienceData(result)
                    }else {
                      console.log("Failed to get data")
                    }
        }
        fetchExperienceData()
    }, [])


    return (
    <div className='relative  z-10 main-margin flex justify-around items-center flex-wrap gap-y-4'>
        <div className='flex flex-col gap-1  items-center experience-content max-sm:w-2/4'>
            <div className='yellow text-xl font-bold'> <CountUp end={experienceData.titleonevalue} duration={4} delay={1} /> <span>+</span> </div>
            <p className='capitalize text-xs white font-medium'>{experienceData.titleone}</p>
        </div>
        <div className='flex flex-col gap-1 items-center experience-content max-sm:w-2/4'>
            <div className='yellow text-xl font-bold'> <CountUp end={experienceData.titletwovalue} duration={4} delay={1} /> </div>
            <p className='capitalize text-xs white font-medium'>{experienceData.titletwo}</p>
        </div>
        <div className='flex flex-col gap-1 items-center experience-content max-sm:w-2/4'>
            <div className='yellow text-xl font-bold'> <CountUp end={experienceData.titlethreevalue} duration={4} delay={1} /> </div>
            <p className='capitalize text-xs white font-medium'>{experienceData.titlethree}</p>
        </div>
        <div className='flex flex-col gap-1 items-center experience-content max-sm:w-2/4'>
            <div className='yellow text-xl font-bold'> <CountUp end={experienceData.titlefourvalue} duration={4} delay={1} /> <span>+</span> </div>
            <p className='capitalize text-xs white font-medium'>{experienceData.titlefour}</p>
        </div>
    </div>
  )
}

export default Experience