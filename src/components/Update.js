// Module imports
import { useState, useContext, useEffect } from 'react'
import env from 'react-dotenv'
import axios from 'axios'

// useContext import
import { UserContext } from '../context/UserContext'

const Update = () => {
  // useContext
  const { userState } = useContext(UserContext)
  const [ user, setUser ] = userState

  // useState
  const [ first, setFirst ] = useState('')
  const [ last, setLast ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ location, setLocation ] = useState('')
  const [ newPass, setNewPass ] = useState('')
  const [ oldPass, setOldPass ] = useState('')
  const [ deletePass, setDeletePass ] = useState('')
  const [ showUpdate, setShowUpdate ] = useState(false)
  const [ showDelete, setShowDelete ] = useState(false)

  // useEffect

  // Update account on backend
  const handleUpdate = (e) => {
    try {
      e.preventDefault()
      // Temporarily set 'location' as false
      setLocation(false)
      const userId = localStorage.getItem('dashboard-token')
      axios.put(`${env.REACT_APP_BACKEND_URL}/user/${userId}`,
        {first: first, last: last, email: email, newPassword: newPass, oldPassword: oldPass, location: location})
        .then((response)=>{setUser(response.data.user); localStorage.setItem('dashboard-token', response.data.user.id)})} 
    catch (error) {console.log(error)}
  }
  
  const handleDelete = (e) => {
    try {
      e.preventDefault()
      const userId = localStorage.getItem('dashboard-token')
      axios({url: `${env.REACT_APP_BACKEND_URL}/user`, method: 'delete', headers: {Authorization: userId}, data: {password: deletePass}})
        .then(localStorage.removeItem('userId')).then(setUser({}))}
    catch (error) {console.log(error)}
  }

  return (
    <div className='accountForm'>
    { showUpdate ?
      <div>
        <input type='button' className='button' value='Cancel Account Update' onClick={()=>{setShowUpdate(false)}}/>
        <h3>Update Account Information:</h3>
        <form onSubmit={handleUpdate}>
          <label htmlFor='first'>First Name: *</label>
          <input type='text' className='signInput' name='first' placeholder='Update First Name' value={first} onChange={(e)=>{setFirst(e.target.value)}} />
          <label htmlFor='last'>Last Name:</label>
          <input type='text' className='signInput' name='last' placeholder='Update Last Name' value={last} onChange={(e)=>{setLast(e.target.value)}} />
          <label htmlFor='email'>Email Address: *</label>
          <input type='text' className='signInput' name='email' placeholder='Update Email Address' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
          <label htmlFor='updateGeo'>Allow dashboard to automatically detemine my location</label>
          <input type='checkbox' id='updateGeo' name='updateGeo' value={location} onChange={(e)=>{setLocation(!location)}} checked={location}/>
          <label htmlFor='newPass'>Update Password:</label>
          <input type='password' name='newPass' placeholder='Update Password' value={newPass} onChange={(e)=>{setNewPass(e.target.value)}} />
          <label htmlFor='password'>Enter current password to apply changes: *</label>
          <input type='password' name='oldPass' placeholder='Current Password' value={oldPass} onChange={(e)=>{setOldPass(e.target.value)}} />
          <div>* required fields</div>
          <input type='submit' className='button' value='Update Account'/>
        </form>
      </div>
    :
      <input type='button' className='button' value='Update Account Information' onClick={()=>{setShowUpdate(true)}}/>
    }
    { showDelete ?
      <div>
        <input type='button' className='button' value='Cancel DELETE ACCOUNT' onClick={()=>{setShowDelete(false)}} />
        <form onSubmit={handleDelete}>
          <label htmlFor='deletePass'>Enter current password to DELETE ACCOUNT: *</label>
          <input type='password' name='deletePass' placeholder='Current Password' value={deletePass} onChange={(e)=>{setDeletePass(e.target.value)}} />
          <input type='submit' className='button' value='DELETE ACCOUNT' />
        </form>
      </div>
    :
      <div>
        <input type='button' className='button' value='DELETE ACCOUNT' onClick={()=>{setShowDelete(true)}} />
      </div>
    }
  </div>
  )
}

export default Update