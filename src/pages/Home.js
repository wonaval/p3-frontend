import SignIn from "../components/SignIn"
import SignUp from "../components/SignUp"

const Home = () => {
  return (
    <div className='home'>
      <h1>HOME</h1>
      <SignUp />
      <SignIn />
    </div>
  )
}

export default Home