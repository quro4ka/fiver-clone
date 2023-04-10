import cn from 'classnames'
import { Link } from 'react-router-dom'
import { AiFillStar } from 'react-icons/ai'

import styles from './AuthorCard.module.scss'

export const AuthorCard = ({ gCard }) => {
  //style={gCard && { display: 'flex', flexDirection: 'column' }}
  return (
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
          <p className={gCard ? styles.description__text_gcard : styles.description__text}>
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
  )
}
