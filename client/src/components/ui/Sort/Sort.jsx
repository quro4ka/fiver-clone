import cn from 'classnames'
import { useEffect, useRef, useState } from 'react'
import { BsCheck2 } from 'react-icons/bs'
import { IoIosArrowUp } from 'react-icons/io'
import styles from './Sort.module.scss'

const options = ['Recommended', 'Best Selling', 'Newest Arrivals']

export const Sort = () => {
  const [active, setActive] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const sortRef = useRef(null)

  const onOption = (index) => {
    setActive(index)
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
        Sort by <span>{options[active]}</span>
        <IoIosArrowUp
          className={isOpen ? cn(styles.arrowIcon, styles.arrowIcon_open) : styles.arrowIcon}
        />
      </div>

      <div className={isOpen ? cn(styles.options, styles.options_active) : cn(styles.options)}>
        {options.map((option, index) => (
          <div onClick={() => onOption(index)} className={styles.option}>
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
