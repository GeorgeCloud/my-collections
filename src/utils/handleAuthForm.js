import { authenticate } from '../features/session/sessionSlice'

export const handleAuthForm = async(e, navigate, dispatch) => {
  e.preventDefault();

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: e.target.username.value,
      password: e.target.password.value
    })
  }

  const apiReponse = await fetch(e.target.route.value, options)
  const user = await apiReponse.json();

  if (apiReponse.status === 200){
    dispatch(authenticate(user));
    navigate('/');
  } else {
    navigate('/access')
  }
}
