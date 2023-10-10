import React from 'react'
import styles from './books.module.css'

export default function Books(props) {
  const data = props
  console.log('DATA: ', data)
  return (
    <div className={styles.booksDashboard} >
      {data.data.map((book, index) => {
        return (
          <div key={index}>
            <h1>{book.name}</h1>
          </div>
        )
      })}
    </div>
  )
}
