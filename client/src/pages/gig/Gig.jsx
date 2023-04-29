import { useState } from 'react'
import { Catalog } from '../../components/ui/Catalog/Catalog'
import { AiFillStar } from 'react-icons/ai'
import styles from './Gig.module.scss'
import { TariffCard } from '../../components/tariffCard/TariffCard'
import { ThumbsCard } from '../../components/thumbsCard/ThumbsCard'
import { useQuery } from '@tanstack/react-query'
import { newRequest } from '../../utils/newRequest'
import { useParams } from 'react-router-dom'

export const Gig = () => {
  const [countStars, setCountStars] = useState(5)
  const starsArray = [...new Array(6)]

  const { id } = useParams()

  const { isLoading, error, data } = useQuery({
    queryKey: ['gig'],
    queryFn: () => newRequest.get(`/gigs/single/${id}`).then((res) => res.data),
  })

  const {
    isLoading: isLoadingUser,
    error: errorUser,
    data: dataUser,
  } = useQuery({
    queryKey: ['user'],
    queryFn: () => newRequest.get(`/users/${data.userId}`).then((res) => res.data),
    enabled: !!data?.userId,
  })

  return (
    <div className={styles.category}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.wrapper__inner}>
            {isLoading ? (
              'Loading...'
            ) : (
              <>
                <Catalog />
                <h1 className={styles.category__title}>{data?.title}</h1>
                {isLoadingUser ? (
                  'Loading...'
                ) : errorUser ? (
                  'error user'
                ) : (
                  <div className={styles.author}>
                    <img
                      className={styles.author__img}
                      src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/d6935fae9d7454d4236e815782948820-1675163338912/2f5246b9-513e-4b51-bef6-457feb13cefe.png"
                      alt="au"
                    />
                    <div className={styles.content}>
                      <p className={styles.author__name}>{dataUser?.username}</p>
                      <p className={styles.author__level}>Level 1 Seller</p>
                      <div className={styles.author__rate}>
                        {isNaN(data?.totalStars / data?.stars) ? (
                          'Нет оценок'
                        ) : (
                          <>
                            <div className={styles.author__rate_stars}>
                              {starsArray.map((star, index) => (
                                <AiFillStar key={index} className={styles.author__rate_icon} />
                              ))}
                            </div>
                            <span className={styles.author__rate_star}>
                              {Math.round(data?.totalStars / data?.stars)}
                            </span>
                            <span className={styles.author__rate_order}>(42)</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                )}
                <div className={styles.gallery}>
                  <ThumbsCard images={data?.images} />
                </div>
              </>
            )}
          </div>
          <div>
            <TariffCard />
          </div>
        </div>
      </div>
    </div>
  )
}
