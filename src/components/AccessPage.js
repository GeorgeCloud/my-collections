import '../styles/Home.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'


function AccessPage(){
  const navigate = useNavigate();

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

        {(isSigningIn === true)
            ? <SignInForm navigate={navigate} />
            : <SignUpForm navigate={navigate} />
        }
      </div>
    </main>
  )
}

export default AccessPage;
