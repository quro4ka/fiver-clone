import { useEffect, useRef, useState } from 'react'
import { Button } from '../ui/Button/Button'
import styles from './MessageForm.module.scss'

export const MessageForm = ({ submit, messageTextRef }) => {
  const changeArea = (e) => {}

  return (
    <form onSubmit={submit} className={styles.form}>
      <div
        data-area
        ref={messageTextRef}
        className={styles.area}
        role="textbox"
        contentEditable
      ></div>
      <Button green type="submit">
        Send
      </Button>
    </form>
  )
}
