import { useQuery } from '@tanstack/react-query'
import { Sort } from '../../components/ui/Sort/Sort'
import { Link, useLocation } from 'react-router-dom'
import { GigsCard } from '../../components/gigsCard/gigsCard'
import { Catalog } from '../../components/ui/Catalog/Catalog'
import { newRequest } from '../../utils/newRequest'

import styles from './Gigs.module.scss'
import { useState } from 'react'
import { useEffect } from 'react'

const options = ['Recommended', 'Best Selling', 'Newest Arrivals']

export const Gigs = () => {
  const [sort, setSort] = useState(options[0])

  const { search } = useLocation()
  const { isPending, isLoading, error, data, refetch } = useQuery({
    queryKey: ['gigs'],
    queryFn: () => newRequest(`/gigs${search}&sort=${sort}`).then((res) => res.data),
  })

  useEffect(() => {
    refetch()
  }, [sort])

  // console.log(data)
  // console.log(sort)

  return (
    <section className={styles.wrapper}>
      <div className="container">
        <div className={styles.category}>
          <Catalog />
          <h2 className={styles.category__title}>AI Artists</h2>
          <p className={styles.category__subtitle}>
            Explore the boundaries of art and technology with Fiverr's AI artists
          </p>
          <div className={styles.result}>
            <span className={styles.result__service}>
              {isLoading ? '...' : data?.length} services available
            </span>
            <div>
              <Sort options={options} setSort={setSort} />
            </div>
          </div>
          {isLoading ? (
            <h1>Loading...</h1>
          ) : error ? (
            'Something went wrong'
          ) : (
            <GigsCard data={data} />
          )}
        </div>
      </div>
    </section>
  )
}
