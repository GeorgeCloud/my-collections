import '../styles/Home.css'
import { useState } from 'react'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'

function AccessPage(){
  const [isSigningIn, setIsSigningIn] = useState(true);

  return (
    <main>
      <div className='page-header'>
      {(isSigningIn === true)
          ? (<div>
              <h1>Signin</h1>
              <u style={{'cursor':'pointer'}}  onClick={() => setIsSigningIn(!isSigningIn)}>Don't have an account? Signup</u>
            </div>)

          : (<div>
              <h1>SignUp</h1>
              <u style={{'cursor':'pointer'}} onClick={() => setIsSigningIn(!isSigningIn)}>Have an account? Signin</u>
              </div>)
      }
      </div>

      {(isSigningIn === true)
          ? <SignInForm />
          : <SignUpForm />
      }
    </main>
  )
}

export default AccessPage;
