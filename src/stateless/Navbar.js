function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler ms-1" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="container navbar-nav mr-auto mt-2 mt-lg-0 ps-1">
                    <li className="nav-item">
                        <a className="nav-link" href={window.location.origin}><strong>Ferramenta</strong></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={window.location.origin + "/About"}><strong>Sobre</strong></a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;