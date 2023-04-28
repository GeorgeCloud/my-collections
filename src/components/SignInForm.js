import '../styles/Home.css'
import { handleAuthForm } from '../utils/handleAuthForm'

function SignInForm({ navigate }){
  return (
    <form onSubmit={(e) => { handleAuthForm(e, navigate) }}>
      <input type="hidden" name="route" value="/api/sessions" />

      <label for="username">username</label>
      <input id="username" type="text" name="username" required />

      <label for="password">password</label>
      <input id="password" type="password" name="password" required />

      <input type="submit" value="Sign in" />
    </form>
  )
}

export default SignInForm;
