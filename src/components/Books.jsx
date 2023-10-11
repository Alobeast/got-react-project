import React from 'react'
import styles from './books.module.css'

export default function Books(props) {
  const data = props
  console.log('DATA: ', data)
  return (
    <div className={styles.booksDashboard} >
      {data.data.map((book, index) => {
        const keys = Object.keys(book).filter(element => {
          if (element == 'name' || element == 'id' || element == 'characters'
            || element == 'povCharacters') {
            return false
          }
          return true
        })
        console.log('KEYS: ', keys)
        return (
          <div key={index}>
            <h1>{book.name}</h1>
            {keys.map(title => {
              return (
                <div key={title} className={styles.keyVal}>
                  <p><span className={styles.keys}>{title}:</span> {book[title]}</p>
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
