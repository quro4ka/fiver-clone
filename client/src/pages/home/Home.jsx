import React, { useState } from 'react'
import { Header } from '../../components/header/Header'
import { Cards } from '../../components/cards/Cards'
import { SellingProposition } from '../../components/sellingProposition/SellingProposition'
import { TechCards } from '../../components/techCards/TechCards'
import { ThumbsCard } from '../../components/thumbsCard/ThumbsCard'

export const Home = () => {
  return (
    <div>
      <Header />
      <Cards title="Popular professional services" card="popular" slidesPerView={5} />
      <SellingProposition />
      <TechCards />
      <Cards
        title="Get inspired with projects made by our freelancers"
        card="project"
        slidesPerView={4}
      />
      {/* <ThumbsCard /> */}
    </div>
  )
}
