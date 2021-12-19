// Function imports
import { useState } from 'react'

// Page/Component imports
import Signin from '../components/Signin'
import Signup from '../components/Signup'

// 

const Home = () => {
  // useState
  // useEffect
  // Functions

  return (
    <div className='home'>
      <h1>HOME</h1>
      <Signup />
      <Signin />
    </div>
  )
}

export default Home