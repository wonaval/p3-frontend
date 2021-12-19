// Module imports
import { useContext } from 'react'
import env from 'react-dotenv'

// useContext import
import { UserContext } from '../context/UserContext'

const Header = () => {
  // useContext
  const { userState } = useContext(UserContext)
  const [ user, setUser ] = userState

  return (
    <div className='header'>
      <span className='logo'>dashboard</span>
        { user.id ?
          <nav>
            <span>Account</span>
            <span onClick={()=>{
              localStorage.removeItem('dashboard-token')
              setUser({})
            }}>Sign out</span>
          </nav>
        :
          <nav>
              <span>Home</span>
              <span>Sign up</span>
              <span>Sign in</span>
          </nav>
        }
    </div>
  )
}

export default Header