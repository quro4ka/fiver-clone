import { useQuery } from '@tanstack/react-query'
import { newRequest } from '../../utils/newRequest'
import { TableRows } from '../../components/tableRows/TableRows'
import { Button } from '../../components/ui/Button/Button'
import styles from './Orders.module.scss'

const titles = ['image', 'title', 'price', 'buyer', 'contact']

export const Orders = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ['orders'],
    queryFn: () => newRequest.get('/orders').then((res) => res.data),
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
