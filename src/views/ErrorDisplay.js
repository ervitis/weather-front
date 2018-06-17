import React from 'react'
import { Link } from 'react-router-dom'

const ErrorDisplay = () => {
  return (
    <div>
      <div className = 'header'>
        <h2>Error displaying weather</h2>
      </div>
      <div className = 'error'>
        <Link to='/'><button>Try Again</button></Link>
      </div>
    </div>
  )
}

export default ErrorDisplay
