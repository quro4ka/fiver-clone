import { AiOutlineUser } from 'react-icons/ai'

import styles from './MessageCard.module.scss'

export const MessageCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card__left}>
        <AiOutlineUser className={styles.base__avatar} />
      </div>
      <div className={styles.card__right}>
        <div className={styles.card__text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, amet. ipsum dolor sit
          amet consectetur adipisicing elit. Dolore, amet. ipsum dolor sit amet consectetur
          adipisicing elit. Dolore, amet. ipsum dolor sit amet consectetur adipisicing elit. Dolore,
          amet.
        </div>
      </div>
    </div>
  )
}
