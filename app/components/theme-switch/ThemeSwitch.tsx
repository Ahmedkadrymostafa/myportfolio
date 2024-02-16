'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import styles from "./ThemeSwitch.module.css"

const ThemeSwitch = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
    const [ checked, setChecked ] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true)

        if (theme === 'light') {
          setChecked(true)
        }
        else {
          setChecked(false)
        }

      }, [theme])

    if (!mounted) {
        return null
    }
    const themeChange = () => {
        if (theme === "light") {
            setTheme("dark")
            setChecked(false)
          }else if (theme === "dark") {
            setTheme("light")
            setChecked(true)
        }
    }
    
  return (
    <div>
      <div className='px w-full h-full'>
        <label className={styles.switch}>
            <input onChange={themeChange} checked={checked}  type="checkbox" className={styles.switchInput} />
            <span className={styles.slider}></span>
        </label>
      </div>
    </div>
  )
}

export default ThemeSwitch