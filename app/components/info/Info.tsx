import Image from "next/image"
import face from "../../assets/face-1.jpg"
import styles from "./Info.module.css"
const Info = (props: any) => {
  return (
    
        <div className={styles.info}>
          <div className='flex content-center flex-col items-center py-6'>
            <div className="relative">
              <Image src={props.img} className="rounded-full max-h-full" width={120} height={117} alt="profile image" />
              
              {props.status === "available" ?
                <div className={styles.artLampLight}>
                    <div className={styles.artLamp}></div>
                </div>              
              :
                <div className={styles.artLampRed}></div>
              }
              
            </div>
            <h1 className="white font-bold mt-2 capitalize">{props.name}</h1>
            <p className="light-gray text-xs mt-1 capitalize">{props.job}</p>
          </div>
        </div>
    
  )
}

export default Info