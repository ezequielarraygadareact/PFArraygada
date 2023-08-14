//Recursos
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
//Logica
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CheckoutContainer = () => {
  const { cart, getTotalPrice } =
    useContext(CartContext);

  let total = getTotalPrice();

  return (
    <div className="contenedorCheckout">
      {cart.map((elemento) => {
        return (
          <div key={elemento.id} className="cardCarrito">
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  {elemento.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Cantidad: {elemento.quantity}
                </Typography>
                <Typography variant="body1">$ {elemento.price}</Typography>
              </CardContent>
            </Card>
          </div>
        );
      })}
    <h2>El total es: $ {total}</h2>
    </div>
  );
};

export default CheckoutContainer;
