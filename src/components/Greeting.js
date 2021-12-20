// Module imports
import { useState, useEffect, useContext } from 'react'

// useContext import
import { UserContext } from '../context/UserContext'

const Greeting = () => {
  // useContext
  const { userState } = useContext(UserContext)
  const [ user, setUser ] = userState

  // useState
  const [ date, setDate] = useState('')

  // useEffect - On load
  useEffect(()=>{
    getDate()
  }, [])

  const getDate = () => {
    // Generate today's date
    const newDate = new Date()
    // Get numeric month then convert to string
    const monthNames = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August','September', 'October', 'November', 'December' ]
    const monthString = monthNames[newDate.getMonth()-1]
    // Get numeric date
    const date = newDate.getDate()
    // Get day string
    const dayNames = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]
    const day = dayNames[newDate.getDay()]
    // Based upon date get ordinal suffix
    let suffix;
    switch (date) {
      case 1: 
      case 21:
      case 31:
      suffix = 'st'
      break
      case 2:
      case 22:
      suffix = 'nd'
      break
      case 3:
      case 23:
      suffix = 'rd'
      break
      default: 
      suffix = 'th'
    }
    const outputDate = `${day} ${monthString} ${date}${suffix}, ${newDate.getFullYear()}`
    setDate(outputDate)
  }



  return (
    <div className='greeting'>
      <div><h1>Hello, {user.first}!</h1></div>
      <div>Today is {date}.</div>
    </div>
  )
}

export default Greeting