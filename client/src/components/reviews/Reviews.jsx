import { useQuery } from '@tanstack/react-query'
import { ReviewCard } from '../reviewCard/ReviewCard'
import styles from './Reviews.module.scss'
import { newRequest } from '../../utils/newRequest'
import { FormReview } from '../formReview/FormReview'
import { Pagination } from '../pagination/Pagination'
import { useEffect, useState } from 'react'

export const Reviews = ({ gigId }) => {
  const { isLoading, error, isSuccess, data } = useQuery({
    queryKey: ['reviews'],
    queryFn: () => newRequest.get(`/reviews/${gigId}`).then((res) => res.data),
  })

  const [totalReviews, setTotalReviews] = useState(null)
  const [reviewsPerPage, setReviewsPerPage] = useState(3)
  const [currentPage, setCurrentPage] = useState(1)

  const lastReviewIndex = currentPage * reviewsPerPage
  const firstReviewIndex = lastReviewIndex - reviewsPerPage
  const currentReviews = data && data.slice(firstReviewIndex, lastReviewIndex)

  useEffect(() => {
    console.log('first')
  }, [])

  useEffect(() => {
    setTotalReviews(data?.length)
  }, [data])

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

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
            {currentReviews.map((review) => (
              <ReviewCard key={review._id} review={review} />
            ))}
            {totalReviews && (
              <Pagination
                paginate={paginate}
                currentPage={currentPage}
                totalReviews={totalReviews}
                reviewsPerPage={reviewsPerPage}
              />
            )}
          </>
        )}
      </div>
      <FormReview gigId={gigId} />
    </div>
  )
}
