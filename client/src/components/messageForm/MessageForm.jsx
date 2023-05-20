import { useEffect, useRef, useState } from 'react'
import { Button } from '../ui/Button/Button'
import styles from './MessageForm.module.scss'

export const MessageForm = ({ submit, setMessage }) => {
  const changeArea = (e) => {
    if (e.code === 13) {
      e.preventDefault()
      console.log('enter', e.keyCode)
    }
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <div onKeyDown={changeArea} className={styles.input} role="textbox" contentEditable></div>
      <Button green type="submit">
        Send
      </Button>
    </form>
  )
}
