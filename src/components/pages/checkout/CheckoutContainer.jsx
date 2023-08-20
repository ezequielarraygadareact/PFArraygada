//Recursos
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, CardMedia } from "@mui/material";
//Logica
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import FormularioCheckOut from "../../common/formularioCheckout/FomularioCheckOut";

const CheckoutContainer = () => {
  const { cart, getTotalPrice } = useContext(CartContext);

  let total = getTotalPrice();

  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
      {cart.map((elemento) => {
        return (
          <div key={elemento.id}>
            <Card sx={{ display: "flex", border: "1px solid black", width:"600px", marginTop:"3%"}}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {elemento.title}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Cantidad: {elemento.quantity}
                  </Typography>
                  <Typography variant="body1">$ {elemento.price}</Typography>
                </CardContent>
              </Box>
              <CardMedia
                component="img"
                sx={{ width: 151, height: 160 }}
                image={elemento.img}
              />
            </Card>
          </div>
        );
      })}
      <Typography variant="subtitle1" component="h2" style={{alignSelf:"center"}}>
      El total es: $ {total}
     </Typography>
      <FormularioCheckOut/>
    </div>
  );
};

export default CheckoutContainer;
