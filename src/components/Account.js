// Module imports
import { useState, useContext, useEffect } from 'react'

// useContext import
import { UserContext } from '../context/UserContext'

// Component/Page imports
import Update from './Update'

const Account = () => {
  // useContext
  const { userState } = useContext(UserContext)
  const [ user, setUser ] = userState

  // useState
  const [ location, setLocation ] = useState('')

  // useEffect - On load
  useEffect(()=>{
  }, [])

  // Page Functions


  return (
    <div className='account'>
      <h2>Account settings</h2>
      <div className='currentAccount'>
        <h3>Current Account Information:</h3>
        <div>Name: {user.first} {user.last}</div>
        <div>Email Address: {user.email}</div>
        <div>Allowing Geolocation? {`${user.location}`}</div>
        <div className='locationForm'><button>Refresh Geolocation</button></div>
      </div>
      <Update />
    </div>
  )
}

export default Account