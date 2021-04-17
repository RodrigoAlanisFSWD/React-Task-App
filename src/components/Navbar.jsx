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
                        <a href="#/" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#/" className="nav-link">Tasks</a>
                    </li>
                </ul>
            </div>

        </nav>
    )
}

export default Navbar;