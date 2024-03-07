'use client'
import Info from "../info/Info"
import Skills from "../skills/Skills"
import SocialIcons from "../socialicons/SocialIcons"
import styles from "./LeftSection.module.css"
import { HiDotsVertical } from "react-icons/hi";
import { useState, useRef, useEffect } from "react";
import { getDoc, doc } from "firebase/firestore"
import { db } from "@/app/firebase/firebase"

const LeftSection = () => {
  const leftSection: any = useRef();
  const dots: any = useRef();
  const [ active, setActive ] = useState(false)
  const [ informationData, setInformationData ] = useState<any>({})
  const [ fetchedData, setFetchedData ] = useState<boolean>(false);

  const activeDots = () => {
    if (active === false) {
      setActive(true)
      leftSection.current.classList.toggle("active-left-section")
      dots.current.classList.toggle("active-dots")
    }else if (active === true) {
      setActive(false)
      leftSection.current.classList.toggle("active-left-section")
      dots.current.classList.toggle("active-dots")
    }
  }

  useEffect(() => {
        
    const fetchData = async () => {
      const docRef = doc(db, "information", "1hQhCuyh8ZWxgPnqWSB4")
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        const result = docSnap.data()
        setInformationData(result)
        setFetchedData(true);
      } else {
        console.log("No such document!");
      }
    }
    fetchData();




    const handleClickOutSide = (e: any) => {
        if (!dots?.current?.contains(e.target)) {
            setActive(false)
            leftSection.current.classList.remove("active-left-section")
            dots.current.classList.remove("active-dots")
        }
    }
    document.addEventListener("click", handleClickOutSide)
}, [])


  return (    
    <>
      {fetchedData === true &&
      
        <div className={styles.leftSection} ref={leftSection}>
            <div className="relative w-full">
              <div className="dots dots-style" ref={dots} onClick={activeDots}><HiDotsVertical /></div>
            </div>               
            <Info name={informationData?.name} job={informationData.job} img={informationData.img} status={informationData.status} />                  
            <Skills
            cvlink={informationData.cvlink}
            residence={informationData.residence}
            city={informationData.city}
            age={informationData.age}
            />
            <SocialIcons
            facebook={informationData.facebook}
            github={informationData.github}
            linkedin={informationData.linkedin}
            instagram={informationData.instagram}
            />
        </div>
      } 
    </>
  )
}

export default LeftSection