import Greeting from '../components/Greeting'
import Weather from '../components/Weather'
import Events from '../components/Events'

const Main = () => {
  // useState
  // useEffect
  // Functions

  return (
    <div className='main'>
      <h1>MAIN</h1>
      <Greeting />
      <Weather />
      <Events />
    </div>
  )
}

export default Main