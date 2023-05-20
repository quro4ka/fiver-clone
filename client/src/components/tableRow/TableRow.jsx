import { AiOutlineMail } from 'react-icons/ai'
import styles from './TableRow.module.scss'

export const TableRow = ({ header }) => {
  return (
    <div>
      {header ? (
        <div className={styles.card}>
          {header.map((title) => (
            <div className={styles.card__title}>{title}</div>
          ))}
        </div>
      ) : (
        <div className={styles.card}>
          {newItem &&
            Object.values(newItem).map((el) => <div className={styles.card__img}>{el}</div>)}

          {titles ? (
            <p className={styles.card__message}>{titles.contact}</p>
          ) : (
            <div className={styles.card__message}>{children}</div>
          )}
        </div>
      )}
    </div>
  )
}
