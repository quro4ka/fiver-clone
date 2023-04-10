import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setModalAuth } from '../../redux/modalSlice'

import { Input } from '../ui/Input/Input'
import { Button } from '../ui/Button/Button'

import styles from './FormAuth.module.scss'

export const FormAuth = () => {
  const isOpen = useSelector((state) => state.modal.isOpenAuth)
  const dispatch = useDispatch()

  return (
    <div className={styles.wrapper}>
      {isOpen && (
        <>
          <div onClick={() => dispatch(setModalAuth(false))} className={styles.overlay}></div>
          <form className={styles.form}>
            <h2 className={styles.form__title}>Auth</h2>
            <div className={styles.inputs}>
              <Input marginBottom={10} placeholder="login" />
              <Input marginBottom={20} placeholder="password" />
            </div>
            <Button width={'100%'} green>
              Auth
            </Button>
          </form>
        </>
      )}
    </div>
  )
}
