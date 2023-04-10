import { Link } from 'react-router-dom'

import { BsHouseDoor } from 'react-icons/bs'

import styles from './Catalog.module.scss'

export const Catalog = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link className={styles.link} to="/">
            <BsHouseDoor className={styles.categoryIcon} />
          </Link>
        </li>
        <span className={styles.slash}>/</span>
        <li className={styles.item}>
          <Link className={styles.link} to="/">
            Graphics & Design
          </Link>
        </li>
      </ul>
    </nav>
  )
}
