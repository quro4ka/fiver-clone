import { useEffect, useState } from 'react'
import { Button } from '../ui/Button/Button'
import { Input } from './../ui/Input/Input'
import { Sort } from './../ui/Sort/Sort'
import { AiFillStar } from 'react-icons/ai'
import styles from './FormReview.module.scss'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { newRequest } from '../../utils/newRequest'

// const options = ['1', '2', '3', '4', '5']

export const FormReview = ({ gigId }) => {
  const [desc, setDesc] = useState('')
  const [options, setOptions] = useState(['1', '2', '3', '4', '5'])
  const [stars, setStars] = useState(options[0])
  const [error, setError] = useState(false)
  // const [active, setActive] = useState(3)

  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: (review) => {
      return newRequest.post('/reviews', review)
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['reviews'])
    },
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log({ gigId, desc, stars })
    if (desc.length < 3) {
      return setError(true)
    }
    mutation.mutate({ gigId, desc, star: stars })
    setDesc('')
    setError(false)
  }

  // console.log(stars)

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {error && 'Malo symbols'}
      <Input
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        placeholder="Enter your opinion..."
      />
      <Sort title="Stars" options={options} setValue={setStars} star>
        <AiFillStar className="starIcon" />
      </Sort>
      <Button green type="submit">
        Send
      </Button>
    </form>
  )
}
