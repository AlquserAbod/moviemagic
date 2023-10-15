import './Header.css';
import { Link, NavLink } from 'react-router-dom';
function Header() {
  return (
    <div className="header">
        <div className="container">
          <div className="logo">
            <Link to='/'> Movie Magic </Link>
          </div>

          <ul className="nav-links">
            <li className='nav-link'>
              <NavLink to='/watchlist'>Watch List</NavLink>
            </li>

            <li className='nav-link'>
              <NavLink to='/watched'>Watched</NavLink>

            </li>

            <li className='nav-link'>
              <NavLink className='btn' to='/add'>Add</NavLink>

            </li>
          </ul>

        </div>
    </div>
  )
}

export default Header