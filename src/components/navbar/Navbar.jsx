import { useEffect, useState } from 'react'
import { Button } from '../ui/Button/Button'
import cn from 'classnames'
import styles from './Navbar.module.scss'

export const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false)
  const [burgerIsOpen, setIsBurgerOpen] = useState(false)

  const scrollNavbar = () => {
    if (window.scrollY > 50) {
      setIsScroll(true)
    } else {
      setIsScroll(false)
    }
  }

  const handleBurger = () => {
    setIsBurgerOpen(!burgerIsOpen)
    document.body.classList.toggle('toggleScroll')
  }

  // const closeNavbar = (e) => {
  //   console.log(e)
  // }

  useEffect(() => {
    window.addEventListener('scroll', scrollNavbar)

    return () => {
      window.removeEventListener('scroll', scrollNavbar)
    }
  }, [])

  // useEffect(() => {
  //   document.addEventListener('click', closeNavbar)

  //   return () => document.removeEventListener('click', closeNavbar)
  // }, [])

  return (
    <>
      {burgerIsOpen && <div onClick={handleBurger} className={styles.overlay}></div>}
      <div className={isScroll ? cn(styles.navbar, styles.navbar_active) : styles.navbar}>
        <div className={styles.container}>
          <div className={styles.left}>
            <div
              onClick={handleBurger}
              className={isScroll ? cn(styles.burger, styles.burger_scroll) : styles.burger}>
              <span className={styles.burger__stick_top}></span>
              <span className={styles.burger__stick_middle}></span>
              <span className={styles.burger__stick_bottom}></span>
            </div>
            <h2 className={styles.logo}>fiverr</h2>
            <div className={styles.dot}></div>
          </div>
          <div className={styles.right}>
            <ul className={burgerIsOpen ? cn(styles.list, styles.open) : styles.list}>
              <li className={styles.item}>Fiverr Business</li>
              <li className={styles.item}>Explore</li>
              <li className={styles.item}>English</li>
              <li className={styles.item}>Become a Seller</li>
            </ul>
            <div className={styles.btns}>
              <Button>Sign in</Button>
              <Button white borderRadius={5} marginLeft={10}>
                Join
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
