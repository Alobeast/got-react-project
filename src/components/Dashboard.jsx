import React, { useState, useEffect } from 'react'
import styles from './dashboard.module.css'
import Options from './Options'

export default function Dashboard() {
  const [truthy, setTruthy] = useState(false)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const questions = ['books', 'characters', 'houses' ]
  const apiUrl = 'https://www.anapioficeandfire.com/api'

  function onClickHandler() {
    setTruthy(!truthy)
  }

  useEffect(() => {
    async function fetchData() {
      const url = apiUrl + '/' + 'books'
      try {
        const res = await fetch(url)
        const jsonData = await res.json()
        console.log('DATA: ', jsonData)
        setData(jsonData)
      } catch(err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <div className={styles.dashboard}>
      <Options/>
    </div>
  )
}
