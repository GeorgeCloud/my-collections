import '../styles/NavBar.css'

import { Link } from 'react-router-dom';

function NavBar(){
    return (
        <nav>
            <Link className='company' to='/'>
                MyCollections
                <img src='https://static.thenounproject.com/png/2221162-200.png' alt='Logo'/>
            </Link>

            <ul className="nav-links">
                <li>
                    <Link to='/'>Home</Link>
                </li>

                <li>
                    <Link to='/collections'>Collections</Link>
                </li>
            </ul>
        </nav>
    )
}


export default NavBar