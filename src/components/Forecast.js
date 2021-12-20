// Module imports
import { useEffect } from 'react'
import env from 'react-dotenv'
import axios from 'axios'

const Forecast = (props) => {
  // ***** REMOVE BEFORE PRODUCTION *****
  // Constants for testing weather API
  const latitude = 42.1713
  const longitude = -71.0715
  // ***** REMOVE BEFORE PRODUCTION *****

  const api_key = env.REACT_APP_API_KEY
  const units = 'imperial'
  const dayNames = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]
  
  // useEffect - On load
  useEffect(()=>{
    getForecast()
  },[])

  // OpenWeather API - Five day forecast request
  const getForecast = () => {
    try {
      // Gets todays date so we can use it in the filter below
      const newDate = new Date()
      const date = newDate.getDate()
      // Get current weather from weather API
      axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${api_key}&units=${units}`)
      .then((response)=>{props.setForecast([...response.data.list.filter((item)=>{return (item.dt_txt.slice(-8) === '12:00:00' && String(item.dt_txt.slice(8, 10)) !== String(date))})])})
      .then(()=>{console.log('Forecast', props.forecast)})
    }
      // Really dense function above! Fetches 5 day forecast and based upon the forecast date string in the json it filters only the forecasts at 12:00PM and removes the forecast for today since it is already displayed in the current forecast component
    catch (error) {
      console.log(error)}
  }

  const convertDate = (date) => {
    const dayNames = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]
    const timestamp = new Date(date)
    const day = dayNames[timestamp.getDay()]
    return day
  }

  return (
    <div>
      <div>Five-day Forecast</div>
      { props.forecast && props.forecast.map((item, i)=>{
        return (
          <div key={i}>
            <div>{convertDate(item.dt_txt)}</div>
            <div><img className='weatherIcon' src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} /></div>
            <div>{item.weather[0].main}</div>
            <div>{item.main.temp_min}&#x2109; / {item.main.temp_max}&#x2109;</div>
          </div>
        )
      })}
      <button onClick={getForecast}>Refresh Forecast</button>
    </div>
  )
}

export default Forecast