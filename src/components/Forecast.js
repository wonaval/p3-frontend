// Module imports
import { useEffect } from 'react'
import env from 'react-dotenv'
import axios from 'axios'

const Forecast = (props) => {
  // Constant declarations
  const latitude = env.REACT_APP_LONG
  const longitude = env.REACT_APP_LAT
  const api_key = env.REACT_APP_API_KEY
  const units = 'imperial'
  
  // useEffect - On load
  useEffect(()=>{
    getForecast()
  },[])

  // Component Functions
  // OpenWeather API - Five day forecast request
  const getForecast = () => {
    try {
      // Gets todays date so we can use it in the filter below
      const newDate = new Date()
      const date = newDate.getDate()
      // Get current weather from weather API
      axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${api_key}&units=${units}`)
      .then((response)=>{props.setForecast([...response.data.list.filter((item)=>{return (item.dt_txt.slice(-8) === '12:00:00' && String(item.dt_txt.slice(8, 10)) !== String(date))})])})
    }
      // Forecast Function - Fetches 5 day forecast and based upon the forecast date string in the json it filters only the forecasts at 12:00PM and removes the forecast for today since it is already displayed in the current forecast component
    catch (error) {
      console.log(error)}
  }

  // Convert timestamp from API and converts it to day
  const convertDate = (date) => {
    const dayNames = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]
    const timestamp = new Date(date)
    const day = dayNames[timestamp.getDay()]
    return day
  }

  return (
    <div>
      <div className='fiveHeader'><h4>Five-day Forecast</h4></div>
        <div className='columns'>
          { props.forecast && props.forecast.map((item, i)=>{
            return (
                <div key={i} className='dayDiv'>
                  <div className='dayName'>{convertDate(item.dt_txt)}</div>
                  <div><img className='weatherIcon' src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt={`Weather Icon ${i}`}/></div>
                  <div>{item.weather[0].main}</div>
                  <div>{item.main.temp_min}&#x2109; / {item.main.temp_max}&#x2109;</div>
                </div>
            )
          })}
        </div>
    </div>
  )
}

export default Forecast