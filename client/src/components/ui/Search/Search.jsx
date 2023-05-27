import { BsSearch } from 'react-icons/bs'
import { Button } from '../Button/Button'
import styles from './Search.module.scss'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Search = () => {
  const [input, setInput] = useState('')
  const [errorInput, setErrorInput] = useState('')

  const navigate = useNavigate()

  const handleSearch = () => {
    if (input.length < 1) {
      setErrorInput('Введите запрос...')
    } else {
      navigate(`/gigs?search=${input}`)
    }
  }

  return (
    <div className={styles.wrapper}>
      {errorInput && <div>{errorInput}</div>}
      <div className={styles.search}>
        <div className={styles.left}>
          <div className={styles.icon}>
            <BsSearch className={styles.searchIcon} />
          </div>

          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Enter the text"
            className={styles.input}
          />
        </div>
      </div>
      <Button
        onClick={handleSearch}
        green
        style={{
          borderRadius: 5,
        }}
      >
        Search
      </Button>
      {/* <Button green>Search</Button> */}
    </div>
  )
}
