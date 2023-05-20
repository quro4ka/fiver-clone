import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { setModalAuth } from '../../redux/modalSlice'

import { newRequest } from '../../utils/newRequest'

import { Input } from '../ui/Input/Input'
import { Button } from '../ui/Button/Button'

import styles from './FormAuth.module.scss'

export const FormAuth = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const navigate = useNavigate()

  const isOpen = useSelector((state) => state.modal.isOpenAuth)
  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await newRequest.post('/auth/login', {
        username,
        password,
      })
      localStorage.setItem('currentUser', JSON.stringify(res.data))
      console.log(res.data)
      navigate('/')
      dispatch(setModalAuth(false))
    } catch (error) {
      setError(error.response.data)
    }
  }

  return (
    <div className={styles.wrapper}>
      {isOpen && (
        <>
          <div onClick={() => dispatch(setModalAuth(false))} className={styles.overlay}></div>
          <form onSubmit={handleSubmit} className={styles.form}>
            <h2 className={styles.form__title}>Auth</h2>
            <div className={styles.inputs}>
              <Input
                style={{ marginBottom: 20 }}
                placeholder="login"
                label="Login"
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                style={{ marginBottom: 20 }}
                placeholder="password"
                label="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button style={{ width: '100%' }} green>
              Auth
            </Button>
            {error && error}
          </form>
        </>
      )}
    </div>
  )
}
