import { AiFillStar } from 'react-icons/ai'
import styles from './SellerCard.module.scss'
import { Button } from '../ui/Button/Button'

export const SellerCard = ({ ...props }) => {
  const starsArray = [...new Array(5)]
  return (
    <div className={styles.card} {...props}>
      <h2 className={styles.card__title}>About the seller</h2>
      <div className={styles.seller}>
        <div className={styles.seller__block}>
          <img
            src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/d6935fae9d7454d4236e815782948820-1675163338912/2f5246b9-513e-4b51-bef6-457feb13cefe.png"
            alt="avatar"
          />
        </div>
        <div className={styles.seller__content}>
          <h5 className={styles.seller__content_title}>Seller</h5>
          <div className={styles.seller__content_stars}>
            {starsArray.map((star, index) => (
              <AiFillStar key={index} className={styles.seller__content_stars} />
            ))}
          </div>
          <Button gray>Contact me</Button>
        </div>
      </div>
    </div>
  )
}
