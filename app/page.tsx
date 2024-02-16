'use client'
import Image from 'next/image'
import Landing from './components/landing/Landing'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Recommendations from './components/recommendations/Recommendations'
import Footer from './components/footer/Footer'
import Projects from './components/projects/Projects'
import { db } from './firebase/firebase'
import { useState, useEffect } from 'react'
import { doc, getDoc } from "firebase/firestore"
import Loading from './components/loading/Loading'

export default function Home() {
  const [ landingData, setLandingData ] = useState<any>({});
  const [ fetchedData, setFetchedData ] = useState<boolean>(false)

  
    useEffect(() => {

      const FetchAllData = async () => {

        const fetchLandingData = async () => {
          const docRef = doc(db, "landing", "pXhtT5Vqk4is6ULjZI2D")
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
              const result = docSnap.data();
              setLandingData(result)
             
          }else {
              console.log("no data found")
          }
        }
        

        await fetchLandingData()

        setFetchedData(true)
      }


      FetchAllData()
    }, [])

    
  return (
    <div>

    {fetchedData === false ? <Loading /> : <div>
      <Landing landingtitle={landingData.landingtitle} landingimg={landingData.landingimg} sequence={landingData.sequence} />

      <Experience />
      <Services />
      <Projects />
      <Recommendations headingTitle="recommendations" />
      <Footer />
    </div> }


      
    </div>
  )
}
