'use client'
import { useForm } from "react-hook-form"
import Heading from "../main-heading/Heading"
import styles from "./ReactForm.module.css"
import { FaUser } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { send } from "emailjs-com";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ReactForm = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm()
      const onSubmit = (data: any) => {
        send(
            'service_o4blb38',
            'template_43m2ryn',
            data,
            'dB8dmNlajaZr6RDrf'
          )
            .then((response: any) => {
              toast.success("Message Sent !");
            })
            .catch((err: any) => {
                toast.error("Failed to send Message, please try again !")
            });
        

      }

  return (
    <div>
        <ToastContainer className="max-[480px]top-12" />

        <div className="main-margin max-[525px]:m-0">
          <Heading title="get in touch" />
          <div className='main-bg p-8'>
            <form onSubmit={handleSubmit(onSubmit)}>

              <div className={styles.artFormField}>
                <input
                {...register("name", {required: true })}
                aria-invalid={errors.name ? "true" : "false"}
                id='name' name="name" type="text" className={styles.artFormInput} required placeholder='Name' />
                {errors.name && (
                    <p role="alert" style={{color: "red"}}>Name is required</p>
                )}
                <label htmlFor="name" className={styles.artFormLabel}><FaUser /></label>
              </div>

              <div className={styles.artFormField}>
                <input
                {...register("email", {required: true})}
                aria-invalid={errors.email ? "true" : "false"}
                id='email' name="email" type="text" className={styles.artFormInput} required placeholder='Email' />
                {errors.email && (
                    <p role="alert" style={{color: "red"}}>Email is required</p>
                )}
                <label htmlFor="email" className={styles.artFormLabel}><MdAlternateEmail /></label>
              </div>

              <div className={styles.artFormField} style={{height: "150px"}}>
                <textarea
                {...register("message", {required: true})}
                aria-invalid={errors.message ? "true" : "false"}
                id='message' name="message" className={styles.artFormInput} style={
                 {
                  height: "150px",
                  paddingTop: "15px",
                  paddingLeft: "65px",
                  
                  }
                } required placeholder='Message' />
                {errors.message && (
                    <p role="alert" style={{color: "red"}}>Message is required</p>
                )}
                <label htmlFor="message" style={{
                  height: "100%",
                  paddingTop: "20px",
                  alignItems: "unset"
                }} className={styles.artFormLabel}><MdOutlineMailOutline /></label>
              </div>

              <div className=' h-14'>
                <input type="submit" className='button' value="send message" />
              </div>
            </form>
          </div>
      </div>
    </div>
  )
}

export default ReactForm