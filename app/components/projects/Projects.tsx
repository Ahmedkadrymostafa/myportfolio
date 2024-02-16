/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import Button from "../main-button/Button"
import Heading from "../main-heading/Heading"
import Link from "next/link"
import { FaEye } from "react-icons/fa";
import { useState, useEffect } from "react";
import { db } from "@/app/firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

interface IProjectsData {
    data: {
        title: string;
        heading: string;
        livelink: string;
        mainimg: string;
    }
    id: string;
}

const Projects = () => {

    const [projectsData, setProjectsData] = useState<IProjectsData[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const query = await getDocs(collection(db, "projects"))
            const projectsArray: any = []

            query.forEach((doc) => {
                projectsArray.push({data: doc.data(), id: doc.id})
            })
            setProjectsData(projectsArray)
        }
        fetchData()
        
    }, [])






  return (
    <div className='relative z-10 main-margin' id="projects">
        <Heading title="projects" />
       <div className="relative flex flex-wrap gap-x-9 gap-y-7  overflow-hidden max-[852px]:justify-center">
           
            {projectsData.map((project) => (
                <Link key={project.id} href={`${"/" + project.id}`}>
                    <div className="card relative w-96 h-60 overflow-hidden max-[425px]:w-80">
                        <Image className="img-card h-full w-full duration-500" width={1000} height={1000} src={project.data.mainimg} alt="project image" />
                        <div className="card-content absolute flex flex-col main-bg pt-4 px-6 h-auto opacity-0 bottom-0 duration-1000 w-96 max-[425px]:w-80 max-[768px]:opacity-100">
                            <p className="capitalize white text-base mb-1">{project.data.title}</p>
                            <p className="light-gray text-sm mb-3">{project.data.heading}</p>
                            <div className="flex justify-between mb-3">
                                <Button link={`${"/" + project.id}`} title="details" />
                                <Link href={project.data.livelink} className="yellow text-sm flex items-center">Live<FaEye className="ml-1" /></Link>
                            </div>
                        </div>          
                    </div>
                </Link>
            ))}

            
       </div>

    </div>
  )
}

export default Projects