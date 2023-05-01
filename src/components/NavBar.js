import '../styles/NavBar.css'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../features/session/sessionSlice'

export default function NavBar(){
  const dispatch = useDispatch();

  const signout = () => {
    // remove localStorage session
    dispatch(logout());
  };

  return (
    <nav>
      <Link className='company' to='/'>
        Yelp
        <img src='https://static.thenounproject.com/png/2221162-200.png' alt='Logo'/>
      </Link>

      <ul className="nav-links">
        <li>
          <Link to=''>
            <u>Home</u>
          </Link>
        </li>

        {/* Hide when logged out */}
        <li>
          <Link to='/collections'>
            <u>My Collections</u>
          </Link>
        </li>

        <li>
          <Link to='/access'>
            <u>Sign in</u>
          </Link>
        </li>

        <li>
          <Link to='/'>
            <u onClick={() => signout()}>Logout</u>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
