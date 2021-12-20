// Module imports
import { useEffect, useContext } from 'react'
import env from 'react-dotenv'
import axios from 'axios'

// useContext import
import { UserContext } from './context/UserContext'

// Page/Component imports
import Header from './components/Header'
import Home from './pages/Home'
import Main from './pages/Main'
import Footer from './components/Footer'

// CSS file
import './App.css'

function App() {
  // useContext
  const { userState } = useContext(UserContext)
  const [ user, setUser ] = userState

  // App functions  // useEffect - On load
  useEffect(()=>{
    fetchUser()
  }, [])

  // App Functions
  // Fetch user if there is localStorage token
  const fetchUser = () => {
    const userId = localStorage.getItem('dashboard-token')
    if (userId) {
      axios.get(`${env.REACT_APP_BACKEND_URL}/user`, {headers: {Authorization: userId}})
      .then((response)=>{setUser(response.data.user)})
    }
  }

  return (
    <div className='Dashboard'>
      <Header />
      {user.id ? <Main /> : <Home />}
      <Footer />
    </div>
  );
}

export default App;
