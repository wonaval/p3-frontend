// Module imports
import { useContext, useEffect } from 'react'

// useContext import
import { UserContext } from '../context/UserContext'

// Component/Page imports
import Update from './Update'

const Account = () => {
  // useContext
  const { userState } = useContext(UserContext)
  const [ user, setUser ] = userState

  // useEffect - On load
  useEffect(()=>{
  }, [])

  return (
    <div className='account'>
      <h2>Account settings</h2>
      <div className='currentAccount'>
        <h3>Account Information:</h3>
        <div>Name: {user.first} {user.last}</div>
        <div>Email Address: {user.email}</div>
        <div>Allowing Geolocation? {`${user.location}`}</div>
      </div>
      <Update />
    </div>
  )
}

export default Account