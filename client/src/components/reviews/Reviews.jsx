import { useQuery } from '@tanstack/react-query'
import { ReviewCard } from '../reviewCard/ReviewCard'
import styles from './Reviews.module.scss'
import { newRequest } from '../../utils/newRequest'
import { FormReview } from '../formReview/FormReview'

export const Reviews = ({ gigId }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['reviews'],
    queryFn: () => newRequest.get(`/reviews/${gigId}`).then((res) => res.data),
  })

  return (
    <div className={styles.reviews}>
      <h2 className={styles.reviews__title}>Reviews</h2>
      <div>
        {isLoading ? (
          'Loading...'
        ) : error ? (
          'error reviews'
        ) : (
          <>
            {data.map((review) => (
              <ReviewCard key={review._id} review={review} />
            ))}
          </>
        )}
      </div>
      <FormReview gigId={gigId} />
    </div>
  )
}
