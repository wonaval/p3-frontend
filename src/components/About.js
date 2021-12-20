const About = () => {
  return (
    <div className='about'>
      <div><h1>Welcome to dashboard!</h1></div>
      <div>
        dashboard is a simple application that helps you with your day.<br/>
        It will show the upcoming forecast and you can save upcoming tasks or events.
      </div>
      <input type='button' className='button' value='Get Started'/>
    </div>
  )
}

export default About