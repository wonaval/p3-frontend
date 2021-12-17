const SignIn = () => {
  return (
    <div className='signUp'>
      <h1>SignIn</h1>
      <div className='signUpForm'>
        <form>
          <label htmlFor='email'>Email Address:</label>
          <input type='text' name='email' placeholder='Email Address' />
          <label htmlFor='password'>Password:</label>
          <input type='password' name='first' placeholder='Password' />
          <input type='submit' value='Sign-up'/>
        </form> 
      </div>
    </div>
  )
}

export default SignIn