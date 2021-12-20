// Module imports
import { useState, useContext } from 'react'
import env from 'react-dotenv'
import axios from 'axios'

// useContext import
import { UserContext } from '../context/UserContext'

const SignUp = () => {
  // useContext
  const { userState } = useContext(UserContext)
  const [ user, setUser ] = userState

  // useState
  const [ first, setFirst ] = useState('')
  const [ last, setLast ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ location, setLocation ] = useState(false)
  const [ password, setPassword ] = useState('')

  // Component Functions
  // Create user on backend
  const handleSignup = (e) => {
    try {
      e.preventDefault()
      axios.post(`${env.REACT_APP_BACKEND_URL}/user`, {first: first, last: last, email: email, password: password, location: location})
        .then((response)=>{setUser(response.data.user); localStorage.setItem('dashboard-token', response.data.user.id)})
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className='signup'>
      <h1>Sign Up</h1>
      <div className='signupForm'>
        <form onSubmit={handleSignup}>
          <label htmlFor='first'>First Name: *</label>
          <input type='text' className='signInput' name='first' placeholder='First Name...' value={first} onChange={(e)=>{setFirst(e.target.value)}} />
          <label htmlFor='last'>Last Name:</label>
          <input type='text' className='signInput' name='last' placeholder='Last Name...' value={last} onChange={(e)=>{setLast(e.target.value)}} />
          <label htmlFor='email'>Email Address: *</label>
          <input type='text' className='signInput' name='email' placeholder='Email Address...' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
          <label htmlFor='password'>Password: *</label>
          <input type='password' className='signInput' name='first' placeholder='Password...' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
          <div>* Indicates field is required</div>
          <div>
            <label htmlFor='allowGeo'>
              <input type='checkbox' className='required' defaultChecked={location} onChange={()=>{setLocation(!location)}} />
              Allow dashboard to determine my location
            </label>
          </div>
          <input type='submit' className='signButton' value='Sign up'/>
        </form>
        <a href="/signin" className='linkBlue'>Already have an account? Sign in</a>
      </div>
    </div>
  )
}

export default SignUp