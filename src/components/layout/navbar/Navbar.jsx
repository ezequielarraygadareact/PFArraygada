import "./Navbar.css";
import CartWidget from "../../common/cartWidget/CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <Link to="/">
            <img
              className="logo"
              src="https://imageup.me/images/08310092-01e0-4f87-8158-7cfd26ddcce7.png"
              alt="Logo"
            />
          </Link>
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            ></button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav barra">
                <Link to="/">
                  <a className="nav-link active">Todas</a>
                </Link>
                <Link to="/category/Alimentos">
                  <a className="nav-link active">Alimentos</a>
                </Link>
                <Link to="/category/Higiene">
                  <a className="nav-link active">Higiene</a>
                </Link>
                <Link to="/category/Medicación">
                  <a className="nav-link active">Medicación</a>
                </Link>
              </div>
            </div>
            <CartWidget />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
