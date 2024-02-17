'use client'
import styles from "./Skills.module.css"
import { FaCheck } from "react-icons/fa6";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { useEffect, useRef, useState } from "react"
import { db } from "../../firebase/firebase"
import { collection, getDocs } from "firebase/firestore"
import Image from "next/image";

interface ILanguagesData  {
    data: {
        language: string;
        power: number;
    }
    id: string;
}
interface ISkillsData {
    data: {
        skill: string;
        skillicon: string;
        progress: number;
    }
    id: string;
}
interface ILibrariesData {
    data: {
        library: string;
    }
    id: string;
}



const Skills = (props: any) => {
    
    

    const [ languagesData, setLanguagesData ] = useState<ILanguagesData[]>([])
    const [ skillsData, setSkillsData ] = useState<ISkillsData[]>([])
    const [ librariesData, setLibrariesData ] = useState<ILibrariesData[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const querySnapshot = await getDocs(collection(db, "languages"))
            const querySnapshotSkills = await getDocs(collection(db, "skills"))
            const queryLibrary = await getDocs(collection(db, "libraries"))
            const languagesArray: any = []
            const skillsArray: any = []
            const librariesArray: any = []

            querySnapshotSkills.forEach((doc) => {
                skillsArray.push({data: doc.data(), id: doc.id})
            })
            setSkillsData(skillsArray)

            querySnapshot.forEach((doc) => {
                languagesArray.push({data: doc.data(), id: doc.id})
            })
            setLanguagesData(languagesArray)

            queryLibrary.forEach((doc) => {
                librariesArray.push({data: doc.data(), id: doc.id})
            })
            setLibrariesData(librariesArray)
        }
        fetchData()
    }, [])



  return (
    <div className='scrolling mt-56  mx-auto w-4/5 pb-16'>
        <div className="addresses mt-2 mb-3">
            <div className='flex justify-between'>
                <p className="white text-xs">Residence:</p>
                <p className="light-gray text-xs capitalize">{props.residence}</p>
            </div>
            <div className='flex justify-between mt-2 mb-2'>
                <p className="white text-xs">City:</p>
                <p className="light-gray text-xs capitalize">{props.city}</p>
            </div>
            <div className='flex justify-between'>
                <p className="white text-xs">Age:</p>
                <p className="light-gray text-xs">{props.age}</p>
            </div>
            <hr className='light-line' />
        </div>

        <div className="languages flex-wrap gap-y-5 flex justify-between mt-4 mb-5">

            {languagesData.map((item) => (

                <div key={item.id} className="progress flex items-center flex-col">
                    <div className={styles.circle} style={{background: `conic-gradient(var(--main-color) ${(item.data.power / 100) * 360}deg, var(--main-bg) 0deg)` }}>
                        <div className={styles.value}>
                            <span className="light-gray text-xs">{item.data.power + "%"}</span>
                        </div>
                    </div>
                    <span className="white text-sm mt-4 capitalize">{item.data.language}</span>
                </div>

            ))}

            
        </div>

        <hr className='light-line' />

        <div className="skills flex flex-col mt-11">

            {skillsData.map((item) => (
                <div className="mb-6" key={item.id}>
                    <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center">
                            <Image src={item.data.skillicon} width={25} height={25} alt="skill icon"></Image>
                            <p className="white capitalize ml-2">{item.data.skill}</p>
                        </div>
                        <p className="light-gray text-xs">{item.data.progress + "%"}</p>
                    </div>
                    <div className={styles.progressBarBg}><div style={{width: `${item.data.progress + "%"}`}} className={styles.progressBar}></div></div>
                </div>

            ))}
            
            
        </div>

        <hr className='light-line' />

        <div className="flex flex-col mt-4">
                
                {librariesData.map((item) => (
                    <div className="flex items-center mb-3" key={item.id}>
                        <FaCheck className="mr-3 yellow text-xs" />
                        <p className="light-gray capitalize text-sm">{item.data.library}</p>
                    </div>

                ))}
           
        </div>

        <hr className='light-line' />

        <div className="flex items-center light-gray">
            <a className="mr-3" href={props.cvlink}>Download CV</a>
            <FaCloudDownloadAlt />
        </div>

       

    </div>
  )
}

export default Skills