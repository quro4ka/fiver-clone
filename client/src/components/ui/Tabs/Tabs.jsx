import React from 'react'
import { Tab } from '../Tab/Tab'

export const Tabs = () => {
  return (
    <div>
      {[1, 1, 1, 1].map((tab, index) => (
        <Tab key={index} />
      ))}
    </div>
  )
}
