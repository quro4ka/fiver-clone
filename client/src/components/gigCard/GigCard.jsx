import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { newRequest } from '../../utils/newRequest'
import { AiFillStar } from 'react-icons/ai'
import { BsFillHeartFill } from 'react-icons/bs'
import styles from './GigCard.module.scss'

export const GigCard = ({ card }) => {
  console.log(card)

  const { isLoading, error, data } = useQuery({
    queryKey: [`${card.userId}`],
    queryFn: () => newRequest(`/users/${card.userId}`).then((res) => res.data),
  })

  return (
    <div className={styles.card}>
      <Link to={`/gig/${card._id}`}>
        <img className={styles.card__img} src={card?.cover} alt="card img" />
      </Link>
      <div className={styles.wrapper}>
        {isLoading ? (
          '...'
        ) : error ? (
          'err'
        ) : (
          <div className={styles.author}>
            <img
              className={styles.author__img}
              src={
                data?.img ||
                'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/d6935fae9d7454d4236e815782948820-1675163338912/2f5246b9-513e-4b51-bef6-457feb13cefe.png'
              }
              alt="avatar"
            />
            <div className={styles.author__content}>
              <h3 className={styles.author__title}>{data?.username}</h3>
              <p className={styles.author__text}>Level 1 Seller</p>
            </div>
          </div>
        )}
        <div className={styles.description}>
          <Link to="/">
            <p className={styles.description__text}>{card?.title}</p>
          </Link>
        </div>
        <div className={styles.info}>
          <div className={styles.rating}>
            <AiFillStar className={styles.rating__icon} />
            <p className={styles.rating__count}>
              {card?.totalstars / card?.stars ? Math.round(card?.totalstars / card?.stars) : '...'}
            </p>
            <span className={styles.rating__review}>(49)</span>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <BsFillHeartFill className={styles.footer__heart} />
        <div className={styles.footer__content}>
          <p className={styles.footer__content_text}>STARTING AT</p>
          <p>
            <span>$</span>
            {card?.price}
          </p>
        </div>
      </div>
    </div>
  )
}
