import { Sort } from '../../components/ui/Sort/Sort'
import { Link } from 'react-router-dom'
import { CategoriesCard } from '../../components/categoriesCard/CategoriesCard'

import styles from './Categories.module.scss'
import { Catalog } from '../../components/ui/Catalog/Catalog'

export const Categories = () => {
  return (
    <section className={styles.wrapper}>
      <div className="container">
        <div className={styles.category}>
          <Catalog />
          <h2 className={styles.category__title}>AI Artists</h2>
          <p className={styles.category__subtitle}>
            Explore the boundaries of art and technology with Fiverr's AI artists
          </p>
          <div className={styles.result}>
            <span className={styles.result__service}>15,579 services available</span>
            <div>
              <Sort />
            </div>
          </div>
          <CategoriesCard />
        </div>
      </div>
    </section>
  )
}
