import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import styles from "./SocialIcons.module.css"
import Link from "next/link";

const SocialIcons = (props: any) => {
  return (
   <div className={styles.socialIcons}>
        <div className='flex justify-between mt-2 mx-auto w-4/5'>
          <Link href={props.facebook}>
            <FaFacebook className={styles.icons} />
          </Link>
          <Link href={props.linkedin}>
            <FaLinkedin className={styles.icons} />            
          </Link>
          <Link href={props.github}>
            <FaGithub className={styles.icons} />
          </Link>
          <Link href={props.instagram}>
            <FaInstagram className={styles.icons} />
          </Link>

        </div>
   </div>
  )
}

export default SocialIcons