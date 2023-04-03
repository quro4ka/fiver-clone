import React from 'react'
import { Navbar } from '../../components/navbar/Navbar'
import { Header } from '../../components/header/Header'
import { PopularCard } from '../../components/popularCard/PopularCard'
import { Cards } from '../../components/cards/Cards'
import { SellingProposition } from '../../components/sellingProposition/SellingProposition'
import { TechCards } from '../../components/techCards/TechCards'
import { ProjectCard } from '../../components/projectCard/ProjectCard'

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Cards title="Popular professional services" slidesPerView={5}>
        <PopularCard />
      </Cards>
      <SellingProposition />
      <TechCards />
      <Cards title="Get inspired with projects made by our freelancers" slidesPerView={4}>
        <ProjectCard />
      </Cards>
    </div>
  )
}
