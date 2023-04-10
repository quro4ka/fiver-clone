import cn from 'classnames'

import styles from './TariffTab.module.scss'

export const TariffTab = ({ tariff, isActive, ...props }) => {
  const { title } = tariff
  // console.log(isActive)
  return (
    <button className={isActive ? cn(styles.btn, styles.btn_active) : styles.btn} {...props}>
      {title}
    </button>
  )
}
