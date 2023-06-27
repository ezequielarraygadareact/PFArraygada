import { IconButton } from "@mui/material";
import "./CartWidget.css";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartWidget = () => {
  return (
    <div className="LogoCarrito">
      <IconButton aria-label="cart">
        <Badge badgeContent={4} color="primary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </div>
  );
};

export default CartWidget;
