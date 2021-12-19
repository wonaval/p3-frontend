// Module imports
import { useState, useContext } from 'react'
import env from 'react-dotenv'
import axios from 'axios'

// useContext import
import { UserContext } from '../context/UserContext'

const Signup = () => {
  // useContext
  const { userState } = useContext(UserContext)
  const [ user, setUser ] = userState

  // useState
  const [ first, setFirst ] = useState('')
  const [ last, setLast ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  // Component Functions
  // Create user on backend
  const handleSignup = (e) => {
    try {
      e.preventDefault()
      // Temporarily set 'location' as false
      const location = false;
      axios.post(`${env.REACT_APP_BACKEND_URL}/user`, {first, last, email, password, location})
      .then((response)=>{setUser(response.data.user); localStorage.setItem('dashboard-token', response.data.user.id)})
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className='signUp'>
      <h1>Sign Up</h1>
      <div className='signUpForm'>
        <form onSubmit={handleSignup}>
          <label htmlFor='first'>First Name:</label>
          <input type='text' name='first' placeholder='First Name *' value={first} onChange={(e)=>{setFirst(e.target.value)}} />
          <label htmlFor='last'>Last Name:</label>
          <input type='text' name='last' placeholder='Last Name' value={last} onChange={(e)=>{setLast(e.target.value)}} />
          <label htmlFor='email'>Email Address:</label>
          <input type='text' name='email' placeholder='Email Address *' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
          <label htmlFor='password'>Password:</label>
          <input type='password' name='first' placeholder='Password *' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
          <input type='submit' value='Sign up'/>
        </form> 
        <div>* required fields</div>
      </div>
    </div>
  )
}

export default Signup