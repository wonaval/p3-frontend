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

  const api_key = env.REACT_APP_API_KEY
  const units = 'imperial'

  // useContext
  const { userState, loadingState } = useContext(UserContext)
  const [ loading, setLoading ] = loadingState

  // useState
  const [ weather, setWeather ] = useState({})
  const [ forecast, setForecast ] = useState([])
  const [ showForecast, setShowForecast ] = useState(false)

  // useEffect - On load
  useEffect(()=>{
    getWeather()
  },[])

  // useEffect - On update of weather hook
  useEffect(()=>{
  }, [weather])

  // OpenWeather API - Current weather request
  const getWeather = () => {
    try {
      // Get current weather from weather API
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}&units=${units}`)
      .then((response)=>{setWeather({...response.data}); console.log('Current Response', response.data)})}
    catch (error) {
      console.log(error)}
  }

  return (
    <div className='weather'>
      { loading && weather ?
        <div>
          <h2>Weather</h2>
          <div>Loading...</div>
        </div>
      :
        <div>
        <h2>Weather</h2>
          <div>
            
            <Current weather={weather} setWeather={setWeather} getWeather={getWeather}/>
            { showForecast ?
              <div>
                <input type='button' value='Hide Forecast' onClick={()=>{setShowForecast(false)}} />
                <Forecast forecast={forecast} setForecast={setForecast}/>
              </div>
            :
              <div>
                <input type='button' value='Show Forecast' onClick={()=>{setShowForecast(true)}} />
              </div>
            }
          </div>
        </div>
      }
    </div>
  )
}

export default Weather