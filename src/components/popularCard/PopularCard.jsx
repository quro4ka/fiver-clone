import styles from './PopularCard.module.scss'

export const PopularCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <p className={styles.text}>Reach more</p>
        <h3 className={styles.title}>Social media</h3>
      </div>
      <img
        className={styles.img}
        src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png"
        alt="img"
      />
    </div>
  )
}
