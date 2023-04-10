import { useState } from 'react'
import { Button } from '../ui/Button/Button'
import { Input } from './../ui/Input/Input'
import styles from './FormRegister.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setModalRegister } from '../../redux/modalSlice'

export const FormRegister = ({ isOpenForm, setIsOpenForm }) => {
  const isOpen = useSelector((state) => state.modal.isOpenRegister)
  const dispatch = useDispatch()

  return (
    <div className={styles.wrapper}>
      {isOpen && (
        <>
          <div onClick={() => dispatch(setModalRegister(false))} className={styles.overlay}></div>
          <form className={styles.form}>
            <h2 className={styles.form__title}>Registration</h2>
            <div className={styles.inputs}>
              <Input marginBottom={10} placeholder="login" />
              <Input marginBottom={20} placeholder="password" />
            </div>
            <Button width={'100%'} green>
              Register
            </Button>
          </form>
        </>
      )}
    </div>
  )
}
