export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <a className="app-title" href="/">
          MovieApp
        </a>
        <ul className="nav-links">
          <li className="nav-item">
            <a className="nav-link" href="/movies">
              Movies
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/tv">
              TV Shows
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/people">
              People
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
