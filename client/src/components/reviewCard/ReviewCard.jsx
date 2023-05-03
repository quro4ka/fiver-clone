import { AiFillStar } from 'react-icons/ai'
import styles from './ReviewCard.module.scss'
import { useQuery } from '@tanstack/react-query'
import { newRequest } from '../../utils/newRequest'

export const ReviewCard = ({ review }) => {
  const starsArray = [...new Array(review.star)]

  const { isLoading, error, data } = useQuery({
    queryKey: [review.userId],
    queryFn: () => newRequest.get(`/users/${review.userId}`).then((res) => res.data),
  })

  // console.log(data)

  return (
    <>
      {isLoading ? (
        'Loading...'
      ) : error ? (
        'error'
      ) : (
        <div className={styles.card}>
          <div className={styles.image}>
            <img
              src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/d6935fae9d7454d4236e815782948820-1675163338912/2f5246b9-513e-4b51-bef6-457feb13cefe.png"
              alt="avatar"
              className={styles.img}
            />
          </div>
          <div className={styles.content}>
            <h5 className={styles.content__title}>{data?.username}</h5>
            <div className={styles.country}>
              <p className={styles.country__title}>{data?.country}</p>
            </div>
            <div className={styles.rate}>
              {starsArray.map((star, index) => (
                <AiFillStar key={index} className={styles.stars} />
              ))}
            </div>
            <p className={styles.content__text}>{review?.desc || ''}</p>
          </div>
        </div>
      )}
    </>
  )
}
