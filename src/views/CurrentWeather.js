import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { default as fetch } from 'isomorphic-fetch'
import { NOT_FOUND } from 'http-status'

import weatherIcons from './icons/weatherIcons'
import NoLocationFound from './icons/loaders/error_loading.svg'
import LoadingIcon from './icons/loaders/loading.svg'

const config = process.env.NODE_ENV === 'production' ? require('../config/default.json') : require('../config/local.json')

class CurrentWeather extends Component {
  constructor (props) {
    super(props)

    this.state = ({
      isLoading: true,
      currentTemp: null,
      humidity: null,
      wind: null,
      windDirection: null,
      currentCondition: null,
      currentConditionDescription: null,
      weatherIcon: null,
      cityName: null,
      cityNotFound: null
    })
    this.host = `${config.apiHost}:${config.port}`
    console.log(this.host)
  }

  componentDidMount () {
    fetch(`${this.host}/api/weather`)
      .then(res => res.json())
      .then(res => {
        console.log(res)
        this.setState({
          isLoading: parseInt(res.cod, 10) === NOT_FOUND,
          cityNotFound: parseInt(res.cod, 10) === NOT_FOUND ? NOT_FOUND : null,
          currentTemp: `${Math.round(res.main.temp)} ºC`,
          humidity: `${res.main.humidity} %`,
          wind: `${Math.round(res.wind.speed)} m/s`,
          windDirection: res.wind.deg,
          currentCondition: res.weather[0].main,
          currentConditionDescription: res.weather[0].description,
          cityName: res.name,
          weatherIcon: this._setWeatherIcon(res.weather[0].id)
        })
      }).catch(err => console.log(err))
  }

  render () {
    const WeatherCardError = (
      <div className = 'weatherCardContainer'>
        <div className = 'weatherCardError'>
          <img src={ NoLocationFound } alt = 'no location' />
        </div>
      </div>
    )

    const WeatherConditions = (
      this.state.cityNotFound === NOT_FOUND ? <div>{ WeatherCardError }</div> :
        <div>
          <div className = 'homeBtn'>
            <Link to = '/'><button>Home</button></Link>
          </div>
          <div className  = 'weatherCardContainer'>
            <div className = 'weatherCard'>
              <img src={ this.state.weatherIcon } alt = 'Weather icon'/>
              <div className = 'conditionsOverview'>
                <p>{ this.state.currentTemp }</p>
                <p>{ this.state.currentConditionDescription }</p>
              </div>
              <div className = 'conditionDetails'>
                <p>Humidity: { this.state.humidity } </p>
                <p>Wind Speed: { this.state.wind } </p>
              </div>
            </div>

            <h4> Location | { this.state.cityName } </h4>
          </div>
        </div>
    )

    const LoadingDisplay = (
      <div className='loading'>
        <img className='loadingIcon' src={LoadingIcon} alt='loading icon'/>
      </div>
    )

    const CurrentWeatherCard = (
      this.state.isLoading === true ? <div> {LoadingDisplay} </div> : <div> {WeatherConditions} </div>
    )

    return (
      <div>
        { CurrentWeatherCard }
      </div>
    )
  }

  _setWeatherIcon (value) {
    const icon = weatherIcons(value)
    if (!icon) {
      return
    }
    return icon.iconObject
  }
}

export default CurrentWeather
