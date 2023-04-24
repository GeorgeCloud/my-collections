import '../styles/Home.css'
import { handleAuthForm } from '../utils/handleAuthForm'

function SignInForm(){
  return (
    <form onSubmit={handleAuthForm}>
      <input type="hidden" name="route" value="/api/session" />

      <label for="username">username</label>
      <input id="username" type="text" name="username" required />

      <label for="password">password</label>
      <input id="password" type="password" name="password" required />

      <input type="submit" value="Sign in" />
    </form>
  )
}

export default SignInForm;
