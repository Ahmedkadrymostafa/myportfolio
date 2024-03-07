import Heading from "@/app/components/main-heading/Heading"
import { db } from "@/app/firebase/firebase"
import { doc, getDoc } from "firebase/firestore"
import Image from "next/image"
import parse from 'html-react-parser';
import Footer from "@/app/components/footer/Footer";
import type { Metadata, ResolvingMetadata } from 'next'
import GetBlogs from "@/app/components/getBlogs/GetBlogs";



type Props = {
    params: { blog: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
{ params, searchParams }: Props,
parent: ResolvingMetadata
): Promise<Metadata> {
// read route params

// fetch data
    const docRef = doc(db, "blogs", params.blog)
    const docSnap = await getDoc(docRef)
    let data: any = docSnap.data();
// optionally access and extend (rather than replace) parent metadata

return {
    title: data.title,
    description: data.description,
    openGraph: {
    title: 'Blogs - Ahmed Kadry',
    description: data.title,
    url: 'https://www.akadry.me',
    siteName: 'Ahmed Kadry',
    images: data.imgurl,
    type: 'website',
  },
}
}

const page = async ( {params}: {params: any} ) => {
    const docRef = doc(db, "blogs", params.blog)
    const docSnap = await getDoc(docRef)
    let data: any = docSnap.data();
  return (
    <div>
        <div className="relative main-margin max-sm:mx-2">
        
            <Heading title={data.title} />
            <div className="card overflow-hidden">
                <Image src={data.imgurl} width={2000} height={2000} className="img-card duration-500 h-96 w-full max-[768px]:h-56" alt="project image banner" />
            </div>
            <div className="flex flex-col main-bg p-2">
                <div className="w-fit ml-auto mb-3">
                    <p className="yellow text-sm">{`Date: ${data.publishDate}`}</p>
                    <p className="yellow text-sm capitalize">{`Author: ${data.author}`}</p>
                </div>
                <div className="text-base white">{parse(data.blog)}</div>
            </div>
        </div>
        <GetBlogs />
        <Footer />
    </div>
  )
}

export default page