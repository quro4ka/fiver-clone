import { TechCard } from '../techCard/TechCard'
import styles from './TechCards.module.scss'

export const TechCards = () => {
  return (
    <div className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Explore the marketplace</h2>
        <div className={styles.cards}>
          {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((card, index) => (
            <TechCard key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
