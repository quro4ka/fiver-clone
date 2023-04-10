import { AiOutlineAudio } from 'react-icons/ai'
import styles from './TechCard.module.scss'

export const TechCard = () => {
  return (
    <div className={styles.card}>
      <AiOutlineAudio className={styles.card__icon} />
      <span className={styles.card__line}></span>
      <p className={styles.card__text}>Graphics & Design</p>
    </div>
  )
}
