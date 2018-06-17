import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './assets/styles.css'

import App from './views/App'
import Home from './views/Home'
import CurrentWeather from './views/CurrentWeather'
import ErrorDisplay from './views/ErrorDisplay'

ReactDom.render(
  <Router>
    <App>
      <Route exact path='/' component={ Home }/>
      <Route exact path='/current-weather' component={ CurrentWeather }/>
      <Route exact path='/error' component={ ErrorDisplay }/>
    </App>
  </Router>
, document.getElementById('root'))
