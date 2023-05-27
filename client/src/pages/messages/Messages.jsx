import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { newRequest } from '../../utils/newRequest'
import { TableRows } from '../../components/tableRows/TableRows'
import moment from 'moment'
import { Button } from './../../components/ui/Button/Button'
import { TableRow } from '../../components/tableRow/TableRow'
import styles from './Messages.module.scss'

const titles = ['Seller', 'Last message', 'Date', 'Action']

export const Messages = () => {
  const queryClient = useQueryClient()

  const { isLoading, isError, data } = useQuery({
    queryKey: ['conversations'],
    queryFn: () => newRequest.get('/conversations').then((res) => res.data),
  })

  console.log(data)

  const mutation = useMutation({
    mutationFn: (id) => {
      return newRequest.put(`/conversations/${id}`)
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['conversations'])
    },
  })

  const handleRead = (id) => {
    console.log(id)
    console.log('fdf')
  }

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>Error...</h2>
  }

  return (
    <div className="container">
      <div className={styles.card}>
        <div className={styles.table}>
          <div className={styles.row}>
            {titles.map((title) => (
              <div className={styles.item}>{title}</div>
            ))}
          </div>
          {data.map((item) => (
            <div key={item.id} className={styles.row}>
              <div className={styles.item}>{item.buyerId}</div>
              <Link to={`/message/${item.id}`} className={styles.item}>
                SMS
              </Link>
              <div className={styles.item}>{moment(item.updatedAt).fromNow()}</div>

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
