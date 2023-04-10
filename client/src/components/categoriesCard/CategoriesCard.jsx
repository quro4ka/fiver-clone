import { CategoryCard } from '../categoryCard/CategoryCard'
import styles from './CategoriesCard.module.scss'

export const CategoriesCard = () => {
  return (
    <div className={styles.cards}>
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
    </div>
  )
}
