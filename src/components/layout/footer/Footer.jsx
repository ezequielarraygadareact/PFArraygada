import { Link } from "react-router-dom";
import "./Footer.css";
import { BsWhatsapp, BsFacebook, BsInstagram } from "react-icons/bs"; 


const Footer = () => {
  return (
    <div className="footerContenedor">
    <div className="redes">
      <Link to ="https://api.whatsapp.com/send?phone=5491156604907" target="_blank">
      <BsWhatsapp/>
      </Link>
      <Link to ="https://www.facebook.com/veterinariapeyret" target="_blank">
      <BsFacebook/>
      </Link>
      <Link to ="https://www.instagram.com/veterinariapeyret/" target="_blank">
      <BsInstagram/>
      </Link>
    </div>
    </div>
  );
};

export default Footer;
