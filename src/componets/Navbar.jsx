const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container ">
          <a href="#" className="navbar-brand">
            <img src="Img/Logo.png" className="img-fluid w-100" alt="" />
          </a>
          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggler"
          >
            <span className="navbar-toggler-icon shadow-none "></span>
          </button>

          <div className="collapse navbar-collapse " id="navbarToggler">
            <ul className="navbar-nav   ms-auto gap-3">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Used Cars
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Auctions
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  New Cars
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Sell Cars
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Local Dealers
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Support
                </a>
              </li>
              <li className="nav-ite NavbarButton">
                <a href="#" className="nav-link">
                  <i className="bi bi-person-fill Iconsbox"></i>
                  <span style={{paddingLeft:"1rem", color:'#9A9EA7', fontSize:'1rem'}}>Sing Up</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
      </nav>
    </>
  );
};
export default Navbar;
