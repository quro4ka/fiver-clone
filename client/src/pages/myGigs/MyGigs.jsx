import React from 'react'
import styles from './MyGigs.module.scss'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { newRequest } from '../../utils/newRequest'
import { Button } from '../../components/ui/Button/Button'
import { Link, useNavigate } from 'react-router-dom'

const titles = ['image', 'title', 'price', 'buyer', 'contact']

export const MyGigs = () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'))

  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const { isLoading, isError, data } = useQuery({
    queryKey: ['myGigs'],
    queryFn: () => newRequest.get(`/gigs?userId=${currentUser?._id}`).then((res) => res.data),
  })

  const mutation = useMutation({
    mutationFn: (id) => {
      return newRequest.delete(`/gigs/${id}`)
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['myGigs'])
    },
  })

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>Error...</h2>
  }

  if (data) {
    console.log(data)
  }

  return (
    <div className="container">
      <div className={styles.card}>
        <Button onClick={() => navigate('/add')} style={{ marginBottom: 20 }} green>
          Add new gig
        </Button>
        <div className={styles.table}>
          <tr className={styles.row}>
            {titles.map((title) => (
              <div className={styles.item}>{title}</div>
            ))}
          </tr>
          {data.map((item) => (
            <div className={styles.row}>
              <div className={styles.item}>no avatar</div>
              <div className={styles.item}>{item.title}</div>
              <div className={styles.item}>{item.price}</div>
              <div className={styles.item}>{item.buyerId}</div>
              <div className={styles.item}>
                <Button style={{ fontSize: 12 }} green>
                  Read
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
