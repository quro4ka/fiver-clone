import { TechCard } from '../techCard/TechCard'
import styles from './TechCards.module.scss'

export const TechCards = () => {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className={styles.cards}>
          {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((card) => (
            <TechCard />
          ))}
        </div>
      </div>
    </div>
  )
}
