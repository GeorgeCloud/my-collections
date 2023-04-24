import '../styles/Home.css'
import { handleAuthForm } from '../utils/handleAuthForm'

function SignUpForm(){
  return (
    <form onSubmit={handleAuthForm}>
      <input type="hidden" name="route" value="/api/users" />

      <label for="username">username</label>
      <input id="username" type="text" name="username" required />

      <label for="password">password</label>
      <input id="password" type="password" name="password" required />

      <input type="submit" value="Sign up" />
    </form>
  )
}

export default SignUpForm;
