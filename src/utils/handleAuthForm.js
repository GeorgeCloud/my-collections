import { redirect } from "react-router-dom";

export const handleAuthForm = async(e) => {
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
    // body: {
    //   "username": e.target.username.value,
    //   "password": e.target.password.value,
    // }
  }

  const apiReponse = await fetch(e.target.route.value, options)
  const user = await apiReponse.json();

  debugger

  if (apiReponse.status === 200){

    // Implement sessions
    return redirect('/')
  } else {
    console.log('return')
    return redirect('/access')
  }
}
