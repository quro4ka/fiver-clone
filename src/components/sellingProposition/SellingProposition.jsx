import { AiOutlineCheckCircle } from 'react-icons/ai'
import styles from './SellingProposition.module.scss'

export const SellingProposition = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.left}>
            <h2 className={styles.title}>A whole world of freelance talent at your fingertips</h2>
            {[1, 1, 1, 1].map((item) => (
              <div className={styles.info}>
                <div className={styles.info__top}>
                  <AiOutlineCheckCircle size={30} color="gray" />
                  <h4 className={styles.info__title}>The best for every budget</h4>
                </div>
                <p className={styles.info__text}>
                  Find high-quality services at every price point. No hourly rates, just
                  project-based pricing.
                </p>
              </div>
            ))}
          </div>
          <div className={styles.right}>
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png"
              alt="video"
              className={styles.right__img}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
