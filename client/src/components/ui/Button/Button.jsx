import cn from 'classnames'
import styles from './Button.module.scss'

export const Button = ({ children, white, green, gray, ...props }) => {
  let style = styles.btn

  if (white) {
    style = cn(styles.btn, styles.white)
  }

  if (green) {
    style = cn(styles.btn, styles.green)
  }

  if (gray) {
    style = cn(styles.btn, styles.gray)
  }

  return (
    <button className={style} {...props}>
      {children}
    </button>
  )
}
