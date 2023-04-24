import '../styles/NavBar.css'

import { Link } from 'react-router-dom';

function NavBar(){
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
            </ul>
        </nav>
    )
}


export default NavBar