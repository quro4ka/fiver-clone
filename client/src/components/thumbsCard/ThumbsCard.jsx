import { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import styles from './ThumbsCard.module.scss'

export const ThumbsCard = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="thumbs2"
      >
        {images?.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="thumbs"
      >
        {images?.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
