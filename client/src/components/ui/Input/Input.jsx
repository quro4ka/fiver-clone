import styles from './Input.module.scss'

export const Input = ({ label = '', ...props }) => {
  return (
    <div
      style={
        props.type === 'checkbox'
          ? { display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 20 }
          : {}
      }
      className={styles.wrapper}
    >
      {label && <label className={styles.label}>{label}</label>}
      {props.type === 'checkbox' ? (
        <label className={styles.switch}>
          <input className={styles.input} type="text" {...props} />
          <span className={styles.slider}></span>
        </label>
      ) : (
        <input className={styles.input} type="text" {...props} />
      )}
    </div>
  )
}
