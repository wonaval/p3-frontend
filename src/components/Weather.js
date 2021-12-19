// Module imports
import { useState, useEffect, useContext } from 'react'
import env from 'react-dotenv'
import axios from 'axios'

// useContext import
import { UserContext } from '../context/UserContext'

// Page/Component imports
import Current from './Current'
import Forecast from './Forecast'

const Weather = () => {
  // ***** REMOVE BEFORE PRODUCTION *****
  // Constants for testing weather API
  const latitude = 42.1713
  const longitude = -71.0715
  // ***** REMOVE BEFORE PRODUCTION *****

  const api_key = env.REACT_APP_BACKEND_API_KEY
  const units = 'imperial'

  // useContext
  const { loadingState } = useContext(UserContext)
  const [ loading, setLoading ] = loadingState

  // useState
  const [ weather, setWeather ] = useState({})
  const [ forecast, setForecast ] = useState({})

  // useEffect - On load
  useEffect(()=>{
    // getWeather()
      console.log('API_KEY', api_key, process.env.REACT_APP_BACKEND_API_KEY)
  },[])

  // useEffect - On update of weather hook
  useEffect(()=>{
  }, [weather])

  // OpenWeather API - Current weather request
  const getWeather = () => {
    try {
      // Get current weather from weather API
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}&units=${units}`)
      .then((response)=>{setWeather({...response.data}); console.log('Response', response.data)})}
    catch (error) {
      console.log(error)}
  }

  return (
    <div className='weather'>
      { loading && weather ?
        <div>
          <h1>Weather</h1>
          <div>Loading...</div>
        </div>
      :
        <div>
        <h1>Weather</h1>
        <div>Display Weather</div>
          <div>
            <Current weather={weather} setWeather={setWeather}/>
            <Forecast forecast={forecast} setForecast={setForecast}/>
          </div>
          <button onClick={getWeather}>Refresh Current</button>
          <button onClick={getWeather}>Refresh Forecast</button>
        </div>
      }
    </div>
  )
}

export default Weather