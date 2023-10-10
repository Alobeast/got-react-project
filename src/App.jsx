import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './components/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header>
        this is the header
      </header>
      <main>
        <img src="https://wallpapers.com/images/hd/hd-game-of-thrones-kingdom-banners-q8t63skg9xy96fab.webp"
        className="bg-image"/>
        <Dashboard/>
      </main>
    </div>
  )
}

export default App
