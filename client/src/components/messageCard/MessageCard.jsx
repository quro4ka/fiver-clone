import { AiOutlineUser } from 'react-icons/ai'

import styles from './MessageCard.module.scss'

export const MessageCard = ({ message }) => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'))

  return (
    <div className={message.userId === currentUser._id ? styles.card : styles.card__owner}>
      <div className={styles.card__left}>
        <AiOutlineUser className={styles.base__avatar} />
      </div>
      <div className={styles.card__right}>
        <div className={styles.card__text}>{message.desc}</div>
      </div>
    </div>
  )
}
