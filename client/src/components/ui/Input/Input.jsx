import styles from './Input.module.scss'

export const Input = ({ ...props }) => {
  return <input style={props} className={styles.input} type="text" {...props} />
}
