import '../styles/NavBar.css'

import { Link } from 'react-router-dom';

function NavBar(){
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>MyCollections</Link>
                </li>

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