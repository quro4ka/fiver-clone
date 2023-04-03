import styles from './ProjectCard.module.scss'

export const ProjectCard = () => {
  return (
    <div className={styles.card}>
      <img
        className={styles.card__img}
        src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/d51cf66f8a7026eb56a8c8e6b6793b24-1617027896306/lamonastudio-img.png"
        alt="card"
      />
      <div className={styles.content}>
        <img
          className={styles.content__img}
          src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/706891a4cc08826adca2819e14129aaf-1583755607494/5a706f4e-9f73-4ebc-97ff-9d2ef16bf28c.jpg"
          alt=""
        />
        <div className={styles.content__text}>
          <p className={styles.content__title}>Animated GIFs</p>
          <span className={styles.content__author}>by lomanostudio</span>
        </div>
      </div>
    </div>
  )
}
