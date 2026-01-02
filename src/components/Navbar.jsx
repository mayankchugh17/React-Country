import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <NavLink to="/">Country Explorer</NavLink>
                </div>
                <ul className="navbar-menu">
                    <li className="navbar-item">
                        <NavLink to="/" className="navbar-link">Home</NavLink>
                    </li>
                    <li className="navbar-item">
                        <NavLink to="/about" className="navbar-link">About</NavLink>
                    </li>
                    <li className="navbar-item">
                        <NavLink to="/contact" className="navbar-link">Contact</NavLink>
                    </li>
                    <li className="navbar-item">
                        <NavLink to="/country" className="navbar-link">Country</NavLink>
                    </li>
                    <li>
                        <NavLink to="/favorites" className="navbar-link">Favorites</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export { Navbar };

