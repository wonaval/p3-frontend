// Module imports
import { useState, useContext } from 'react'
import env from 'react-dotenv'
import axios from 'axios'

// useContext import
  import { UserContext } from '../context/UserContext'

const SignIn = () => {
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
      axios.post(`${env.REACT_APP_BACKEND_URL}/user/login`, {email: email, password: password})
      .then((response)=>{setUser(response.data.user); localStorage.setItem('dashboard-token', response.data.user.id)})
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className='signin'>
      <h1>Sign In</h1>
      <div className='signinForm'>
        <form onSubmit={handleSignin}>
          <label htmlFor='email'>Email Address:</label>
          <input type='text' className='signInput' name='email' placeholder='Email address...' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
          <label htmlFor='password'>Password:</label>
          <input type='password' className='signInput' name='first' placeholder='Password...'  value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
          <input type='submit' className='signButton' value='Sign in'/>
        </form> 
        <a href='/signup'>Don't have an account? Sign up</a>
      </div>
    </div>
  )
}

export default SignIn