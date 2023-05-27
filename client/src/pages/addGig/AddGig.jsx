import React from 'react'
import styles from './AddGig.module.scss'
import { Input } from '../../components/ui/Input/Input'

export const AddGig = () => {
  return (
    <div className="container">
      <div className={styles.card}>
        <h2 className={styles.title}>Add new gig</h2>
        <form className={styles.form}>
          <div className={styles.left}>
            <Input label="Title" placeholder="Enter the title" />
            <Input label="Category" placeholder="Design" />
            <Input label="Cover Image" type="file" />
            <Input label="Upload Images" type="file" />
          </div>
          <div className={styles.right}>
            <Input label="Service title" placeholder="One page web" />
            <Input label="Short description" placeholder="Short desc" />
          </div>
        </form>
      </div>
    </div>
  )
}
