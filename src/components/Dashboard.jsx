import React, { useState, useEffect } from 'react'
import styles from './dashboard.module.css'
import Options from './Options'
import useFetchData from '../hooks/useFetchData'
import Characters from './Characters'
import Books from './Books'
import Houses from './Houses'
import Loader from './Loader'

export default function Dashboard() {
  const [selection, setSelection] = useState(null)
  const { data, loading, error } = useFetchData(selection)

  function onClickHandler(clickedButton) {
    return () => {
      setSelection(clickedButton)
    }
  }

  const dataRender = {
    'books': <Books data={data} />,
    'characters': <Characters data={data} />,
    'houses': <Houses data={data} />,
  }

  return (
    <div className={styles.dashboard}>
      <div className={styles.layout}>
        <h1 className={styles.title}>GOT INFO</h1>
        <Options selection={selection} setSelection={onClickHandler} />
        {loading && (
          <Loader/>
        )}
        {(data && !loading) && (
          dataRender[selection]
        )}
      </div>
    </div>
  )
}
