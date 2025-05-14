import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <NavLink className="app-title" to="/">
          MovieApp
        </NavLink>
        <ul className="nav-links">
          <li className="nav-item">
            <NavLink className="nav-link" to="/movies">
              Movies
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/tv">
              TV Shows
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/person">
              People
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
