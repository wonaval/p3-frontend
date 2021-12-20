// Module imports
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

// Component/page imports
import Greeting from '../components/Greeting'
import Weather from '../components/Weather'
import Events from '../components/Events'
import Account from '../components/Account'

const Main = () => {
  // useState
  const [ long, setLong] = useState(0)
  const [ lat, setLat] = useState(0)


  // useEffect
  useEffect(()=>{

  }, [])

  // Page functions
  // Confirm is geolocation is allowed
  const geoConfirm = () => {
    // Confirms is geolocation is available
    if ('geolocation' in navigator) {
      console.log('Geolocation AVAILABLE')
      // Get long and latitude
      navigator.geolocation.getCurrentPosition(function(position) {
        setLong(position.coords.latitude)
        setLat(position.coords.longitude)
      }, function(err) {console.log(`ERROR(${err.code}): ${err.message}`)})
    } else {
      console.log('Geolocation NOT AVAILABLE')
    }
  }

  return (
    <div className='main'>
      <h1>MAIN</h1>
      <Routes>
        <Route path='/' element={<div><Greeting /><Weather /><Events /></div>}></Route>
        <Route path='/account' element={<Account />}></Route>
      </Routes>
    </div>
  )
}

export default Main