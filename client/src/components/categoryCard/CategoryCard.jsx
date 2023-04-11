import { AiFillStar } from 'react-icons/ai'
import { BsFillHeartFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import styles from './CategoryCard.module.scss'

export const CategoryCard = () => {
  return (
    <div className={styles.card}>
      <Link to="/gig/1">
        <img
          className={styles.card__img}
          src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/298455330/original/71894dfd3e509a10b445aeca0b3db60d38f2e7e6/create-amazing-fictional-ai-art-portraits-character-design.jpg"
          alt="card img"
        />
      </Link>
      <div className={styles.wrapper}>
        <div className={styles.author}>
          <img
            className={styles.author__img}
            src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/d6935fae9d7454d4236e815782948820-1675163338912/2f5246b9-513e-4b51-bef6-457feb13cefe.png"
            alt="avatar"
          />
          <div className={styles.author__content}>
            <h3 className={styles.author__title}>quro4ka</h3>
            <p className={styles.author__text}>Level 1 Seller</p>
          </div>
        </div>
        <div className={styles.description}>
          <Link to="/">
            <p className={styles.description__text}>
              I will make amazing fictional ai art, ai portraits, ai character design
            </p>
          </Link>
        </div>
        <div className={styles.info}>
          <div className={styles.rating}>
            <AiFillStar className={styles.rating__icon} />
            <p className={styles.rating__count}>5.0</p>
            <span className={styles.rating__review}>(49)</span>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <BsFillHeartFill className={styles.footer__heart} />
        <div className={styles.footer__content}>
          <p className={styles.footer__content_text}>STARTING AT</p>
          <p>
            <span>$</span>19
          </p>
        </div>
      </div>
    </div>
  )
}
