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
  const latitude = env.REACT_APP_LAT
  const longitude = env.REACT_APP_LONG
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
      .then((response)=>{setWeather({...response.data})})}
    catch (error) {
      console.log(error)}
  }

  // Timestamp conversion
  const convertTimestamp = () => {
    const timestamp = new Date(weather.dt-weather.timezone) 
    return `${timestamp.getHours()}:${timestamp.getMinutes()}`
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
                <Forecast forecast={forecast} setForecast={setForecast}/>
                <img src='../images/arrow.jpg'className='up' onClick={()=>{setShowForecast(false)}}/>
              </div>
            :
              <div>
              <img src='../images/arrow.jpg'className='down' onClick={()=>{setShowForecast(true)}}/>
              </div>
            }
          </div>
          <div className='smallText'>Weather data last updated at {convertTimestamp()}</div>
        </div>
      }
    </div>
  )
}

export default Weather