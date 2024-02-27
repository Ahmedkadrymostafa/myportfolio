'use client'
import { useState, useRef, useEffect } from "react";
import styles from "./Menu.module.css"
import { FaBarsStaggered } from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeSwitch from "../theme-switch/ThemeSwitch";

const Menu = () => {
    const [ active, setActive ] = useState(false)
    const menuElement: any = useRef();
    const pathName = usePathname();
    const burgerIcon: any = useRef();
    
    const openMenu = () => {
        const element = menuElement.current
        if (active === false) {
            setActive(true)
            element.classList.toggle("active")
            burgerIcon.current.classList.toggle("sm-burger-icon")
        }else if (active === true) {
            setActive(false)
            element.classList.toggle("active")
            burgerIcon.current.classList.toggle("sm-burger-icon")
        }
    }
    
    useEffect(() => {
        
        const handleClickOutSide = (e: any) => {
            if (!burgerIcon?.current?.contains(e.target)) {
                setActive(false)
                menuElement.current.classList.remove("active")
                burgerIcon.current.classList.add("sm-burger-icon")
            }
        }
        document.addEventListener("click", handleClickOutSide)
    }, [])
    

  return (
    <div className={styles.menu} ref={menuElement}>
        <div>
            <div  onClick={openMenu} className="light-gray-bg sm-burger-icon menu-icon" ref={burgerIcon}>             
                <FaBarsStaggered />
            </div>
            {
                !active && (
                    <div className="menu-active-page hide">
                        {pathName == "/" && (
                            <div>home</div>
                        )}
                        {/* {pathName == "/blogs" && (
                            <div>blogs</div>
                        )} */}
                        {pathName == "/contact" && (
                            <div>contact</div>
                        )}
                    </div>
                )
            }
        </div>
        {active && (
            <div  className="flex flex-col">
                {pathName == "/" ? (<Link className={styles.menuLinkActive} href="/">home</Link>) : (<Link className={styles.menuLink} href="/">home</Link>)}
                {pathName == "/contact" ? (<Link className={styles.menuLinkActive} href="/contact">contact</Link>) : (<Link className={styles.menuLink} href="/contact">contact</Link>)}
                
            </div>
        )}
        <div className="flex flex-col light-gray-bg h-32 language-btn-container">
           
            <ThemeSwitch />
        </div>
    </div>
  )
}

export default Menu