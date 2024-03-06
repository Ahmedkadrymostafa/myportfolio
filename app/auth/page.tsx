'use client'
import { useRef } from "react";
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from "../firebase/firebase";
import { toast } from 'react-toastify';
import { useRouter } from "next/navigation";

const Page = () => {
  
    const email: any = useRef();
    const password: any = useRef();
    const router = useRouter();
  
    const login = (e: any) => {
      e.preventDefault();
      let authEmail = email.current.value
      let authPassword = password.current.value
  
        signInWithEmailAndPassword(auth, authEmail, authPassword)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            
            toast.success("signed in successfully")
            sessionStorage.setItem('user', 'true');
            router.push('/auth/addblog')
          })
          .catch((error: any) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error("invalid email or password")
          });
    } 
    
  return (
    <div className="relative h-[100vh] w-[100vw] flex justify-center items-center">
        <form className="flex flex-col gap-3">
            <input ref={email} className="w-72 h-9 p-2" type="text" placeholder="enter email" />
            <input ref={password} className="w-72 h-9 p-2" type="password" placeholder="password" />
            <input type="submit" value="login" onClick={login} />
        </form>
    </div>
  )
}

export default Page