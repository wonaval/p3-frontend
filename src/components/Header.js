// Module imports
import { useContext } from 'react'
import { Link } from 'react-router-dom'

// useContext import
import { UserContext } from '../context/UserContext'

const Header = () => {
  // useContext
  const { userState } = useContext(UserContext)
  const [ user, setUser ] = userState

  return (
    <div className='header'>
      <span className='title'>dashboard</span>
        { user.id ?
          <nav>
            <span><Link to='/'>Home</Link></span>
            <span><Link to='/account'>Account</Link></span>
            <span className='link' onClick={()=>{
              localStorage.removeItem('dashboard-token')
              setUser({})
            }}>Sign out</span>
          </nav>
        :
          <nav>
          <span><Link to='/'>Home</Link></span>
              <span><Link to='/signup'>Sign up</Link></span>
              <span><Link to='/signin'>Sign in</Link></span>
          </nav>
        }
    </div>
  )
}

export default Header