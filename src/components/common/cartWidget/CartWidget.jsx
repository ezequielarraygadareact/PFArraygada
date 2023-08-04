import { IconButton } from "@mui/material";
import "./CartWidget.css";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <div className="LogoCarrito">
      <Link to="/cart">
        <IconButton aria-label="cart">
          <Badge badgeContent={4} color="primary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Link>
    </div>
  );
};

export default CartWidget;
