import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);
  let total = getTotalQuantity();
  return (
    <div className="LogoCarrito">
      <Link to="/cart">
        <Badge badgeContent={total} showZero>
          <ShoppingCartIcon color="main" sx={{ fontSize: 40 }} />
        </Badge>
      </Link>
    </div>
  );
};

export default CartWidget;
