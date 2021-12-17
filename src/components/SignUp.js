import { useState } from 'react'
import axios from 'axios'

const SignUp = () => {
  // useState
  const [ first, setFirst ] = useState('')
  const [ last, setLast ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ user, setUser ] = useState([])

  // Component Functions
  // Create user on backend
  const handleSubmit = async () => {
    try {
      // Temporarily set 'location' as false
      const location = false;
      const response = await axios.post('http://localhost:3001/user', {first, last, email, password, location})
      // Console log response from backend
      console.log({response})
      // Set user state
      setUser([...response.data.user])
      // Set localstorage with user id
      localStorage.setItem('userId', response.data.user.id)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className='signUp'>
      <h1>SignUp</h1>
      <div className='signUpForm'>
        <form onSubmit={handleSubmit}>
          <label htmlFor='first'>First Name:</label>
          <input type='text' name='first' placeholder='First Name *' value={first} onChange={(e)=>{setFirst(e.target.value)}} />
          <label htmlFor='last'>Last Name:</label>
          <input type='text' name='last' placeholder='Last Name' value={last} onChange={(e)=>{setLast(e.target.value)}} />
          <label htmlFor='email'>Email Address:</label>
          <input type='text' name='email' placeholder='Email Address *' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
          <label htmlFor='password'>Password:</label>
          <input type='password' name='first' placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
          <input type='submit' value='Sign-up'/>
        </form> 
        <div>* required fields</div>
      </div>
    </div>
  )
}

export default SignUp