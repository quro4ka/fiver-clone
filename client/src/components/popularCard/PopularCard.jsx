import styles from './PopularCard.module.scss'

export const PopularCard = ({ data }) => {
  const { title, text, img } = data

  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <p className={styles.text}>{text}</p>
        <h3 className={styles.title}>{title}</h3>
      </div>
      <img className={styles.img} src={img} alt="img" />
    </div>
  )
}
