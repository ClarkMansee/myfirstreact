const NavBar = ()=>{
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link" href="/">Home</a>
                    <a className="nav-link" href="/employees">Employees</a>
                    <a className="nav-link" href="/add">Add Employees</a> 
                </div>
                </div>
            </div>
        </nav>
        </div>
    );
}

export default NavBar;