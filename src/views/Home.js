import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className = 'header'>
        <h2>Weather Forecast</h2>
      </div>

      <div className = 'homeBtn'>
        <p><Link to = '/current-weather'><button>Current weather</button></Link></p>
      </div>

    </div>
  )
}

export default Home
