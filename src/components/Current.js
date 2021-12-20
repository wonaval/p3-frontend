const Current = (props) => {

  // Timestamp conversion
  const convertTimestamp = () => {
    const timestamp = new Date(props.weather.dt-props.weather.timezone) 
    return `${timestamp.getHours()}:${timestamp.getMinutes()}`
  }

  return (
    <div>
      <div>Right now:</div>
      { props.weather.weather && props.weather.weather.map((period, i)=>{
        return (
          <div key={i}>
            <div>{props.weather.name}</div>
            <div>{period.main}</div>
            <div>"{period.description.charAt(0).toUpperCase() + period.description.slice(1)}"</div>
            <div><img className='weatherIcon' src={`http://openweathermap.org/img/wn/${period.icon}@2x.png`} /></div>
            <div>
              <div>Temperature: </div>
              <div className='currentTemp'>Current Temp: {props.weather.main.temp}&#x2109;</div>
              <div>{props.weather.main.temp_min}&#x2109; / {props.weather.main.temp_max}&#x2109;</div>
              <div>Low / High</div>
            </div>
            <div>Feels like: {props.weather.main.feels_like}&#x2109;</div>
            <div>Humidity: {props.weather.main.humidity}%</div>
            <div>Precipitation: </div>
          </div>
      )})}
      <div>Weather data last updated at {convertTimestamp()}</div>
      <button onClick={props.getWeather}>Refresh Current</button>
    </div>
  )
}

export default Current