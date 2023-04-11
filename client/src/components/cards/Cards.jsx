import { PopularCard } from '../popularCard/PopularCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import styles from './Cards.module.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import { breakpoints } from '../../swiperBreakpoints'
import { Link } from 'react-router-dom'
import { TechCard } from '../techCard/TechCard'
import { ProjectCard } from '../projectCard/ProjectCard'

export const Cards = ({ slidesPerView, title = '', card }) => {
  const getCard = (cardData) => {
    if (card === 'popular') {
      return <PopularCard data={cardData} />
    }

    if (card === 'project') {
      return <ProjectCard data={cardData} />
    }
  }

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
            // className="mySwiper"
          >
            {[1, 1, 1, 1, 1, 1, 1, 1, 1].map((cardData, index) => (
              <SwiperSlide key={index}>
                <Link to="/gigs?cat=design">{getCard(cardData)}</Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
