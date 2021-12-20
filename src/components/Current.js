import '../App.css'

const Current = (props) => {

  // Timestamp conversion
  const convertTimestamp = () => {
    const timestamp = new Date(props.weather.dt-props.weather.timezone) 
    return `${timestamp.getHours()}:${timestamp.getMinutes()}`
  }

  return (
    <div>
      <div><h4>Today's Forecast</h4></div>
      { props.weather.weather && props.weather.weather.map((period, i)=>{
        return (
          <div key={i} className='mainCurrent'>
            <div className='currentLeft'>
              <div className='currentIcon'>
                <div><img className='weatherIcon' src={`http://openweathermap.org/img/wn/${period.icon}@2x.png`} /></div>
                <div>{period.main}</div>
                <div>"{period.description.charAt(0).toUpperCase() + period.description.slice(1)}"</div>
              </div>
              <div className='textTemp'>
                <div className='currentTemp'>{props.weather.main.temp}&#x2109;</div>
                <div className='minmaxTemp'>{props.weather.main.temp_min}&#x2109; / {props.weather.main.temp_max}&#x2109;</div>
                <div>Low / High</div>
              </div>
              <div className='miscInfo'>
                <div>Feels like: {props.weather.main.feels_like}&#x2109;</div>
                <div>Humidity: {props.weather.main.humidity}%</div>
              </div>
            </div>
          </div>
      )})}
    </div>
  )
}

export default Current