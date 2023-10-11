import React from 'react'
import styles from './books.module.css'

export default function Houses(props) {
  const data = props
  return (
    <div className={styles.booksDashboard}>
      {data.data.map((house, index) => {
        return (
          <div key={index}>
            <h1>{house.name}</h1>
          </div>
        )
      })}
    </div>
  )
}
