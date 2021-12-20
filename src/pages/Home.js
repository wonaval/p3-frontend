// Function imports
import { Route, Routes } from 'react-router-dom'

// Page/Component imports 
import About from '../components/About'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'

const Home = () => {
  return (
    <div className='home'>
      <Routes>
        <Route path='*' element={<About />} />
        <Route path='/' element={<About />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default Home