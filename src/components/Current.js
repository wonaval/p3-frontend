const Current = (props) => {

  // Timestamp conversion
  const convertTimestamp = () => {
    const timestamp = new Date(props.weather.dt-props.weather.timezone)
    return `${timestamp.getHours()}:${timestamp.getMinutes()}`
  }

  return (
    <div>
      <div>Current Weather</div>
      { props.weather.weather && props.weather.weather.map((period, i)=>{
        return (
          <div key={i}>
            <div>
              Weather in {props.weather.name}<br/>
              Weather data last updated at {convertTimestamp()}<br/>
            </div>
            <div>{period.main}</div>
            <div>"{period.description.charAt(0).toUpperCase() + period.description.slice(1)}"</div>
            <div>Weather icon: <img src={`http://openweathermap.org/img/wn/${period.icon}@2x.png`} />{period.icon}</div>
            <div>Temperature: High-{props.weather.main.temp_max}&#x2109; Low-{props.weather.main.temp_min}&#x2109;</div>
          </div>
      )})}
      <button onClick={props.getWeather}>Refresh Current</button>
    </div>
  )
}

export default Current