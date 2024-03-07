import { MetadataRoute } from "next";
import { db } from '../app/firebase/firebase'
import { getDocs, collection } from 'firebase/firestore'

export const revalidate = 60;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    
    const collectionRef = await getDocs(collection(db, "projects"))
    const blogsRef = await getDocs(collection(db, "blogs"))

    const projectEntries = collectionRef.docs.map((doc: any) => ({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}${doc.id}`,
        lastModified: new Date()
    }));
    const blogEntries = blogsRef.docs.map((doc: any) => ({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}blogs/${doc.id}`,
        lastModified: new Date()
    }));

    return [
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}blogs`,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}contact`,
        },
        ...blogEntries,
        ...projectEntries
    ]
}        