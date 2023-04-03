import { PopularCard } from '../popularCard/PopularCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import styles from './Cards.module.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import { breakpoints } from '../../swiperBreakpoints'

export const Cards = ({ children, slidesPerView, title = '', cards }) => {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>{title}</h2>
      </div>
      <div className={styles.cards}>
        <div className="container">
          <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={30}
            navigation={true}
            modules={[Navigation]}
            breakpoints={breakpoints}
            className="mySwiper">
            {[1, 1, 1, 1, 1, 1, 1, 1, 1].map((card) => (
              <SwiperSlide>{children}</SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
