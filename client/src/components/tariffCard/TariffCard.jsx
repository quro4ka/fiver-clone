import { useState } from 'react'
import { TariffTab } from '../ui/TariffTab/TariffTab'

import styles from './TariffCard.module.scss'

const tariffs = [
  {
    id: 1,
    title: 'Basic',
    description: 'hi how are you',
    price: 20,
  },
  {
    id: 2,
    title: 'Standart',
    description: 'hi how are you',
    price: 40,
  },
  {
    id: 3,
    title: 'Premium',
    description: 'hi how are you',
    price: 80,
  },
  // {
  //   id: 4,
  //   title: 'Premium',
  //   description: 'hi how are you',
  //   price: 80,
  // },
]

export const TariffCard = () => {
  const [activePlan, setActivePlan] = useState(1)

  return (
    <div className={styles.card}>
      <div className={styles.tabs}>
        {tariffs.map((tariff, index) => (
          <TariffTab
            key={tariff.id}
            index={index}
            tariff={tariff}
            isActive={activePlan === index}
            onClick={() => setActivePlan(index)}
          />
        ))}
      </div>
      <div className={styles.wrapper}>
        <div className={styles.tariff}>
          <h3 className={styles.tariff__title}>{tariffs[activePlan].title}</h3>
          <p className={styles.tariff__price}>${tariffs[activePlan].price}</p>
        </div>
      </div>
    </div>
  )
}
