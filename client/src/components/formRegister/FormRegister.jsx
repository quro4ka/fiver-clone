import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../ui/Button/Button'
import { Input } from './../ui/Input/Input'
import { useDispatch, useSelector } from 'react-redux'
import { setModalRegister } from '../../redux/modalSlice'
import { newRequest } from './../../utils/newRequest'

import styles from './FormRegister.module.scss'
import { uploadImg } from '../../utils/uploadImg'

export const FormRegister = ({ isOpenForm, setIsOpenForm }) => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    img: '',
    country: '',
    isSeller: false,
    desc: '',
  })
  const [file, setFile] = useState(null)

  const isOpen = useSelector((state) => state.modal.isOpenRegister)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleUser = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSeller = (e) => {
    setUser((prev) => ({
      ...prev,
      isSeller: e.target.checked,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const url = await uploadImg(file)

    try {
      const res = await newRequest.post('/auth/register', {
        ...user,
        img: url,
      })

      dispatch(setModalRegister(false))
      navigate('/')
    } catch (error) {}
  }

  return (
    <div className={styles.wrapper}>
      {isOpen && (
        <>
          <div onClick={() => dispatch(setModalRegister(false))} className={styles.overlay}></div>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.content}>
              <div className={styles.form__left}>
                <h2 className={styles.form__left_title}>Create a new account</h2>
                <div className={styles.inputs}>
                  <Input
                    onChange={handleUser}
                    style={{ marginBottom: 20 }}
                    name="username"
                    placeholder="login"
                    label="Username"
                  />
                  <Input
                    onChange={handleUser}
                    style={{ marginBottom: 20 }}
                    name="email"
                    placeholder="email"
                    label="Email"
                  />
                  <Input
                    onChange={handleUser}
                    style={{ marginBottom: 20 }}
                    name="password"
                    placeholder="password"
                    label="Password"
                  />
                  <Input
                    onChange={(e) => setFile(e.target.files[0])}
                    style={{ marginBottom: 20 }}
                    placeholder="password"
                    label="Profile picture"
                    type="file"
                  />
                  <Input
                    onChange={handleUser}
                    name="country"
                    style={{ marginBottom: 20 }}
                    placeholder="Russia"
                    label="Country"
                  />
                </div>
              </div>
              <div className={styles.form__right}>
                <h2 className={styles.form__right_title}>I want to become a seller</h2>
                <div className={styles.inputs}>
                  <Input
                    onChange={handleSeller}
                    style={{ marginBottom: 20 }}
                    label="Activate seller"
                    type="checkbox"
                  />
                  <Input
                    onChange={handleUser}
                    style={{ marginBottom: 20 }}
                    name="phone"
                    placeholder="+7 9..."
                    label="Phone number"
                    type="tel"
                  />
                  <Input
                    onChange={handleUser}
                    style={{ marginBottom: 20 }}
                    name="desc"
                    placeholder="description"
                    label="Description"
                  />
                </div>
              </div>
            </div>
            <Button style={{ width: '100%' }} green>
              Register
            </Button>
          </form>
        </>
      )}
    </div>
  )
}
