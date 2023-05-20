import React, { useState } from 'react'
import { Header } from '../../components/header/Header'
import { Cards } from '../../components/cards/Cards'
import { SellingProposition } from '../../components/sellingProposition/SellingProposition'
import { TechCards } from '../../components/techCards/TechCards'
import { ThumbsCard } from '../../components/thumbsCard/ThumbsCard'

const popularData = [
  {
    title: 'AI Artists',
    text: 'Reach more',
    img: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_2.0/v1/attachments/generic_asset/asset/f27bec553efc12cc60baed89b8f2223e-1674661140708/ai-artists-2x.png',
  },
  {
    title: 'WordPress',
    text: 'Reach more',
    img: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_2.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png',
  },
  {
    title: 'Social media',
    text: 'Reach more',
    img: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png',
  },
  {
    title: 'SEO',
    text: 'Reach more',
    img: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png',
  },
  {
    title: 'Illustration',
    text: 'Reach more',
    img: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png',
  },
  {
    title: 'Data Entry',
    text: 'Reach more',
    img: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png',
  },
]

export const Home = () => {
  return (
    <div>
      <Header />
      <Cards
        title="Popular professional services"
        card="popular"
        slidesPerView={5}
        data={popularData}
      />
      <SellingProposition />
      <TechCards />
      <Cards
        title="Get inspired with projects made by our freelancers"
        card="project"
        slidesPerView={4}
        data={popularData}
      />
      {/* <ThumbsCard /> */}
    </div>
  )
}
