import { GigCard } from '../gigCard/GigCard'
import styles from './GigsCard.module.scss'

export const GigsCard = ({ data }) => {
  return (
    <div className={styles.cards}>
      {data.map((card) => (
        <GigCard key={card._id} card={card} />
      ))}
    </div>
  )
}
