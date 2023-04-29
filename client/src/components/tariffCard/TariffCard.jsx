import { useState } from 'react'
import { Button } from './../ui/Button/Button'
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
  const [activePlan, setActivePlan] = useState(0)

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>Gig 1 title</h3>
        <p className={styles.price}>
          <span>$</span> 59
        </p>
      </div>
      <div className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ad ut eius qui rerum
        ducimus accusantium nam, laudantium incidunt earum.
      </div>
      <div className={styles.order}>
        <div className={styles.delivery}>del</div>
        <div className={styles.revisions}>rev</div>
      </div>
      <div className={styles.features}>
        <div className={styles.feature}>feature</div>
        <div className={styles.feature}>feature</div>
        <div className={styles.feature}>feature</div>
      </div>
      <Button style={{ width: '100%' }} green>
        Continue
      </Button>
    </div>
  )
}

// <div className={styles.tabs}>
//         {tariffs.map((tariff, index) => (
//           <TariffTab
//             key={tariff.id}
//             index={index}
//             tariff={tariff}
//             isActive={activePlan === index}
//             onClick={() => setActivePlan(index)}
//           />
//         ))}
//       </div>
//       <div className={styles.wrapper}>
//         <div className={styles.tariff}>
//           <h3 className={styles.tariff__title}>{tariffs[activePlan].title}</h3>
//           <p className={styles.tariff__price}>${tariffs[activePlan].price}</p>
//         </div>
//       </div>
