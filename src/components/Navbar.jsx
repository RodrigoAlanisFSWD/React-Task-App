import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">
                    Task App
                </span>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink exact to="/" activeClassName="active" className="nav-link">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/tasks" href="#/" activeClassName="active" className="nav-link">Tasks</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;

