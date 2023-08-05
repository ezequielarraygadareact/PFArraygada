import "./Navbar.css";
import CartWidget from "../../common/CartWidget/CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <Link to="/">
            <img
              className="logo"
              src="https://imageup.me/images/08310092-01e0-4f87-8158-7cfd26ddcce7.png"
              alt="Logo"
            />
          </Link>
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <Link to="/">
                  <a class="nav-link active">Todas</a>
                </Link>
                <Link to="/category/Alimentos">
                  <a class="nav-link active">Alimentos</a>
                </Link>
                <Link to="/category/Higiene">
                  <a class="nav-link active">Higiene</a>
                </Link>
                <Link to="/category/Medicación">
                  <a class="nav-link">Medicación</a>
                </Link>
              </div>
            </div>
          </div>
          <CartWidget />
        </nav>
      </div>
    </>
  );
};

export default Navbar;
