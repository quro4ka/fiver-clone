import { Search } from '../ui/Search/Search'
import { Tabs } from '../ui/Tabs/Tabs'
import styles from './Header.module.scss'

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Find the perfect freelance services for your business</h1>
          <div className={styles.search}>
            <Search />
          </div>
          <div className={styles.popular}>
            <span className={styles.popular__title}>Popular:</span>
            <Tabs />
          </div>
        </div>
      </div>
    </div>
  )
}
