import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setPopup } from '../../../redux/popupSlice'

import { CiLogout } from 'react-icons/ci'
import { AiOutlineUser } from 'react-icons/ai'

import { newRequest } from '../../../utils/newRequest'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Popup.module.scss'

export const Popup = () => {
  const { isOpenPopup } = useSelector((state) => state.popup)
  const dispatch = useDispatch()
  const popupRef = useRef(null)

  const navigate = useNavigate()

  const outsidePopup = (e) => {
    const path = e.composedPath()

    if (!path.includes(popupRef.current) && path.length < 12) {
      dispatch(setPopup(false))
    }
  }

  const handleLogout = async () => {
    try {
      await newRequest.post('/auth/logout')
      localStorage.setItem('currentUser', null)
      dispatch(setPopup(false))
      navigate('/')
    } catch (error) {}
  }

  useEffect(() => {
    document.body.addEventListener('click', outsidePopup)

    return () => {
      document.body.removeEventListener('click', outsidePopup)
    }
  }, [])

  return (
    <div ref={popupRef} className={styles.popup}>
      <Link to="/" className={styles.item}>
        <div className={styles.item__icon}>
          <AiOutlineUser className={styles.userIcon} />
        </div>
        <p className={styles.item__text}>Profile</p>
      </Link>
      <Link to="/mygigs" className={styles.item}>
        <div className={styles.item__icon}>
          <AiOutlineUser className={styles.userIcon} />
        </div>
        <p className={styles.item__text}>My gigs</p>
      </Link>
      <Link to="/orders" className={styles.item}>
        <div className={styles.item__icon}>
          <AiOutlineUser className={styles.userIcon} />
        </div>
        <p className={styles.item__text}>Orders</p>
      </Link>
      <Link to="/messages" className={styles.item}>
        <div className={styles.item__icon}>
          <AiOutlineUser className={styles.userIcon} />
        </div>
        <p className={styles.item__text}>Messages</p>
      </Link>
      <Link to="/" className={styles.item} onClick={handleLogout}>
        <div className={styles.item__icon}>
          <CiLogout />
        </div>
        <p className={styles.item__text}>Log out</p>
      </Link>
    </div>
  )
}
