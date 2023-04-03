import { BsSearch } from 'react-icons/bs'
import { Button } from '../Button/Button'
import styles from './Search.module.scss'

export const Search = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.search}>
        <div className={styles.left}>
          <div className={styles.icon}>
            <BsSearch className={styles.searchIcon} />
          </div>
          <input type="text" placeholder="Enter the text" className={styles.input} />
        </div>
      </div>
      <Button green borderRadius={5}>
        Search
      </Button>
    </div>
  )
}
