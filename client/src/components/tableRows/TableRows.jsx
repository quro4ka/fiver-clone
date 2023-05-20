import { useQuery } from '@tanstack/react-query'
import { TableRow } from '../tableRow/TableRow'
import { newRequest } from '../../utils/newRequest'
import { AiOutlineMail } from 'react-icons/ai'
import styles from './TableRows.module.scss'

export const TableRows = ({ data, titles, label, items, handleRead }) => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'))

  console.log('items', items)
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{label}</h2>

      <TableRow titles={titles} />

      <>
        {items?.map((item) => (
          <TableRow key={item.id} item={item}>
            {<AiOutlineMail onClick={() => handleRead(item.id)} />}
          </TableRow>
        ))}
      </>
    </div>
  )
}
