import cn from 'classnames'
import { Children, useEffect, useRef, useState } from 'react'
import { BsCheck2 } from 'react-icons/bs'
import { IoIosArrowUp } from 'react-icons/io'
import { AiFillStar } from 'react-icons/ai'
import styles from './Sort.module.scss'

export const Sort = ({ title = 'Select', options = [], setValue, children }) => {
  const [active, setActive] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const sortRef = useRef(null)

  const onOption = (index, option) => {
    setActive(index)
    setValue(option)
    setIsOpen(false)
  }

  const handleOptions = () => {
    setIsOpen(!isOpen)
  }

  const handleClickOutside = (e) => {
    const path = e.composedPath()

    if (!path.includes(sortRef.current)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.body.addEventListener('click', handleClickOutside)

    return () => removeEventListener('click', handleClickOutside)
  }, [])

  return (
    <div ref={sortRef} className={styles.sort}>
      <div onClick={handleOptions} className={styles.sort__title}>
        {title} <span>{options[active]}</span>
        {children}
        <IoIosArrowUp
          className={isOpen ? cn(styles.arrowIcon, styles.arrowIcon_open) : styles.arrowIcon}
        />
      </div>

      <div className={isOpen ? cn(styles.options, styles.options_active) : cn(styles.options)}>
        {options.map((option, index) => (
          <div key={index} onClick={() => onOption(index, option)} className={styles.option}>
            <div className={active === index ? styles.option__icon : styles.checkHidden}>
              <BsCheck2 />
            </div>
            <span className={styles.option__text}>{option}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
