// Module imports
import { useState, useContext } from 'react'
import env from 'react-dotenv'
import axios from 'axios'

// useContext import
  import { UserContext } from '../context/UserContext'

const Signin = () => {
  // useContext
  const { userState } = useContext(UserContext)
  const [ user, setUser ] = userState

  // useState
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  // Component Functions
  const handleSignin = (e) => {
    try {
      e.preventDefault()
      axios.post(`${env.REACT_APP_BACKEND_URL}/user/login`, {email: email, password, password})
      .then((response)=>{setUser(response.data.user); localStorage.setItem('dashboard-token', response.data.user.id)})
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className='signin'>
      <h1>Sign In</h1>
      <div className='signupForm'>
        <form onSubmit={handleSignin}>
          <label htmlFor='email'>Email Address:</label>
          <input type='text' name='email' placeholder='Email Address' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
          <label htmlFor='password'>Password:</label>
          <input type='password' name='first' placeholder='Password'  value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
          <input type='submit' value='Sign in'/>
        </form> 
      </div>
    </div>
  )
}

export default Signin