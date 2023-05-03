import styles from './Info.module.scss'

export const Info = ({ title = '', children, ...props }) => {
  return (
    <div className={styles.card} {...props}>
      <h2 className={styles.card__title}>{title}</h2>
      <p className={styles.card__desc}>{children}</p>
    </div>
  )
}
