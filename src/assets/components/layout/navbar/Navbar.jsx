import "./Navbar.css";
import CartWidget from "../../common/CartWidget/CartWidget";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <img
          className="logo"
          src="https://imageup.me/images/08310092-01e0-4f87-8158-7cfd26ddcce7.png"
          alt="Logo"
        />
        <div class="container-fluid">
          <a class="navbar-brand" href="Veterinaria Peyret">
            VeterinariaPeyret
          </a>
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
              <a class="nav-link active" aria-current="page" href="#">
                Alimentos
              </a>
              <a class="nav-link" href="#">
                Cuidados
              </a>
              <a class="nav-link" href="#">
                Vacunas
              </a>
              <a class="nav-link">Medicación</a>
            </div>
          </div>
        </div>
        <CartWidget />
      </nav>
    </div>
  );
};

export default Navbar;
