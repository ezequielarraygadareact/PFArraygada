import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import NavbarLay from "./navbar/NavbarLay";

const Layout = () => {
  return (
    <div>
      <NavbarLay />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
