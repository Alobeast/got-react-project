import React, { useState } from 'react'
import styles from './books.module.css'

export default function Characters(propos) {
  const [char, setChar] = useState('')
  const data = propos
  const mappedList = data.data.filter(element => {
    if (char == '') {
      return true
    }
    if (element['name'].toLowerCase().includes(char.toLowerCase())) {
      return true
    }
    return false
    })

  return (
    <div className={styles.booksDashboard}>
      <input className={styles.characterSelect} value={char} placeholder='Character Name' onChange={(e) =>{ setChar(e.target.value)}}></input>
      { mappedList
        .filter(char => char.name !== '')
        .map((char,index) => {
        const keys = Object.keys(char).filter(element => {
          if (!char[element] || (Array.isArray(char[element]) && char[element].filter(Boolean).length === 0)) {
            return false
          }
          if (element == 'name' || element == 'id') {
            return false
          }
          return true
        })
        return (
          <div key={index}>
            <h1>{char.name}</h1>
            {keys.map(title => {
              return (
                <div key={title} className={styles.keyVal}>
                  <p><span className={styles.keys}>{title}: </span>
                  {Array.isArray(char[title]) ? char[title].join(", ") :
                   char[title]}</p>
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
