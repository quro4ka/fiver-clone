import { useEffect, useRef, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { MessageCard } from '../../components/messageCard/MessageCard'
import { Catalog } from './../../components/ui/Catalog/Catalog'
import { newRequest } from '../../utils/newRequest'
import { MessageForm } from '../../components/messageForm/MessageForm'
import styles from './Message.module.scss'

export const Message = () => {
  const { id } = useParams()

  const messageTextRef = useRef('')
  const queryClient = useQueryClient()

  const { isLoading, isError, data } = useQuery({
    queryKey: ['messages'],
    queryFn: () => newRequest.get(`/messages/${id}`).then((res) => res.data),
  })

  const mutation = useMutation({
    mutationFn: (message) => {
      return newRequest.post(`/messages`, message)
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['messages'])
    },
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const message = document.querySelector('[data-area]')
    mutation.mutate({
      conversationId: id,
      desc: messageTextRef?.current.textContent,
    })

    message.textContent = ''
  }

  return (
    <div className={styles.message}>
      <div className="container">
        <Catalog />
        {isLoading ? (
          'Loading'
        ) : isError ? (
          'error'
        ) : (
          <div className={styles.messages}>
            {data.length !== 0 && data.map((message) => <MessageCard message={message} />)}
          </div>
        )}
        <div className={styles.form}>
          <MessageForm submit={handleSubmit} messageTextRef={messageTextRef} />
        </div>
      </div>
    </div>
  )
}
