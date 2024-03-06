'use client'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, storage, db } from '../../firebase/firebase';
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';
import Editor from 'react-simple-wysiwyg';
import { useState, useRef } from 'react';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; 
import Image from "next/image";
import dummyImg from "../../assets/dummyimg2.jpg"
import { toast } from 'react-toastify';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import Loading from '@/app/components/loading/Loading';

const Page = () => {
    let [ blog, setBlog ] = useState('');
    const [ isLoading, setIsLoading ] = useState(false);
    const [ permaLink, setPermaLink ] = useState('permaLink');
    const [ selectedImage, setSelectedImage ] = useState<string>('');
    const [ image, setImage ] = useState<any>();
    const fileInput: any = useRef();
    const title: any = useRef<HTMLInputElement>();
    const publishDate: any = useRef<HTMLInputElement>();
    const author: any = useRef<HTMLInputElement>();
    const description: any = useRef<HTMLInputElement>();
    const featured: any = useRef<HTMLInputElement>();
    const [user] = useAuthState(auth);
    const router = useRouter();
    const userSession = sessionStorage.getItem('user');
    // console.log(user);
    if (!user) {
        router.push("/auth")
    }

    
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            setSelectedImage(reader.result as string);
        };
        reader.readAsDataURL(file);
        } else {
        setSelectedImage('');
        }
    }
    const emptyInputs = () => {
        setBlog('')
        setSelectedImage('');
        title.current.value = '';
        publishDate.current.value = '';
        author.current.value = '';
        description.current.value = '';
        setPermaLink('permaLink');
        fileInput.current.value = "";
        featured.current.checked = false;
    }
    const addBlog = async (e: any) => {
        setIsLoading(true);
        let imgUrl: String;
        let t = title.current.value
        let pd = publishDate.current.value
        let a = author.current.value
        let d = description.current.value
        let f = featured.current.checked ? true : false;
        e.preventDefault();
        if (!image || !title || !blog || !publishDate || !author || !description) return toast.error("please write full inputs")
        
        const imageRef = ref(storage, `blogs/${image.name}`)
        await uploadBytes(imageRef, image).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                imgUrl = url
            }).then(async () => {
                try {
                    await setDoc(doc(db, "blogs", `${permaLink}`), {
                        title: t,
                        publishDate: pd,
                        author: a,
                        description: d,
                        featured: f,
                        blog: blog,
                        imgurl: imgUrl,
                    })
                    setIsLoading(false)
                    toast.success("A New blog was added")
                    emptyInputs();
                } catch (err) {
                    console.log(err)
                    toast.error("failed to add blog")
                    setIsLoading(false)
                }
            })
        })
    }
    if (userSession && user) {
        return (
            
          <div className="relative main-margin">
            {isLoading && <Loading />}
              <button className='mb-4' onClick={() => {
                  signOut(auth)
                  sessionStorage.removeItem("user");
              }}>log out
              </button>
      
              <form className='flex flex-col gap-4'>
                  {selectedImage !== '' && <Image src={selectedImage} className="w-[350px] h-[270px]" width={350} height={270} alt="blog image"></Image>}
                  {selectedImage === '' && <Image src={dummyImg} className="w-[350px] h-[270px]" width={350} height={270} alt="blog image"></Image>}
                  <input ref={fileInput} type="file" onChange={(e: any) => {
                      handleImageChange(e);
                      setImage(e.target.files[0]);
                  }} />
                  <input ref={title} className='w-full h-11 p-3' type="text" placeholder='blog title' onChange={(e: any) => {
                      let title = e.target.value
                      title.replace(/\s+/g, "-")
                      setPermaLink(title.replace(/\s+/g, "-"))
                  }} />
                  <input value={permaLink} className='w-full h-11 p-3 opacity-70' type="text" disabled />
                  <div className='flex gap-2'>
                    <label htmlFor="featured">featured</label>
                    <input ref={featured} type="checkbox" name="featured" />
                  </div>
                  <input ref={description} className='w-full h-11 p-3 opacity-70' type="text" placeholder='blog description' />
                  <input ref={publishDate} className='w-full h-11 p-3 opacity-70' type="text" placeholder='publish date' />
                  <input ref={author} className='w-full h-11 p-3 opacity-70' type="text" placeholder='author' />
                  <Editor value={blog} onChange={(e: any) => {
                      setBlog(e.target.value)
                  }} />
                  <input type="submit" value="create blog" onClick={(e: any) => {
                      // e.preventDefault();
                      // console.log(blog)
                      addBlog(e);
                  }} />        
              </form>
          </div>
        )
    }
}

export default Page