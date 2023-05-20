import cn from 'classnames'
import styles from './Pagination.module.scss'

export const Pagination = ({ paginate, currentPage, totalReviews, reviewsPerPage }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalReviews / reviewsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {pageNumbers.map((num) => (
          <li
            onClick={() => paginate(num)}
            className={currentPage === num ? cn(styles.item, styles.item_active) : styles.item}
          >
            {num}
          </li>
        ))}
      </ul>
    </div>
  )
}
