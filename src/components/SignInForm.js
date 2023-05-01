import '../styles/Home.css'
import { handleAuthForm } from '../utils/handleAuthForm'
import { useDispatch } from 'react-redux';

export default function SignInForm({ navigate }){
  const dispatch = useDispatch();

  return (
    <form onSubmit={(e) => handleAuthForm(e, navigate, dispatch)}>
      <input type="hidden" name="route" value="/api/sessions" />

      <label for="username">username</label>
      <input id="username" type="text" name="username" required />

      <label for="password">password</label>
      <input id="password" type="password" name="password" required />

      <input type="submit" value="Sign in" />
    </form>
  )
}
