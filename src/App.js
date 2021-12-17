
// Import modules
import { useEffect } from 'react'

// Components
import Home from './pages/Home';

// Pages

// CSS file
import './App.css';

function App() {

  // useState
  // const [ example, setExample ] = useState('')

  // useEffect - On load
  useEffect(()=>{
    // geolocation()
  }, [])

  // Functions
  // Geolocation function - Run on first load of website
  const geolocation = () => {
    // Confirms is geolocation is available
    if ("geolocation" in navigator) {
      console.log("Geolocation AVAILABLE");
    } else {
      console.log("Geolocation NOT AVAILABLE");
    }
  }

  return (
    <div className="Dashboard">
      <h1>DASHBOARD</h1>
      <Home />
    </div>
  );
}

export default App;
