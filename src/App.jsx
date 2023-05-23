/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/navBar'
import Hero from './components/hero'
import Card from './components/card'
import data from '../data'


/*function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}*/

function App(){
  const cardData = data.map(hero => {
    return <Card img={hero.coverImg}
     rating={hero.stats.rating}
     reviewCount={hero.stats.reviewCount}
     country={hero.location}
     title={hero.title}
     price={hero.price}
     openSpots={hero.openSpots}
    />
  })
  return(
    <div>
      <NavBar />
      <Hero />
      <div className='cardList'>
      {cardData}</div>
    </div>
  )
}

export default App
