import { useState } from 'react'
import { Catalog } from '../../components/ui/Catalog/Catalog'
import { AiFillStar } from 'react-icons/ai'
import styles from './FullCategory.module.scss'
import { TariffCard } from '../../components/tariffCard/TariffCard'
import { ThumbsCard } from '../../components/thumbsCard/ThumbsCard'

export const FullCategory = () => {
  const [countStars, setCountStars] = useState(5)

  const starsArray = [...new Array(6)]

  return (
    <div className={styles.category}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.wrapper__inner}>
            <Catalog />
            <h1 className={styles.category__title}>
              I will make amazing fictional ai art, ai portraits, ai character design
            </h1>
            <div className={styles.author}>
              <img
                className={styles.author__img}
                src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/d6935fae9d7454d4236e815782948820-1675163338912/2f5246b9-513e-4b51-bef6-457feb13cefe.png"
                alt="au"
              />
              <div className={styles.content}>
                <p className={styles.author__name}>quro4ka</p>
                <p className={styles.author__level}>Level 1 Seller</p>
                <div className={styles.author__rate}>
                  <div className={styles.author__rate_stars}>
                    {starsArray.map((star, index) => (
                      <AiFillStar key={index} className={styles.author__rate_icon} />
                    ))}
                  </div>
                  <span className={styles.author__rate_star}>{countStars}</span>
                  <span className={styles.author__rate_order}>(42)</span>
                </div>
              </div>
            </div>
            <div className={styles.gallery}>
              <ThumbsCard />
            </div>
          </div>
          <TariffCard />
        </div>
      </div>
    </div>
  )
}
