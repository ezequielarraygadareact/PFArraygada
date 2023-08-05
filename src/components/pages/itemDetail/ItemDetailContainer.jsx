//mui
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
//Logica
import { useEffect, useState, useContext } from "react";
import { products } from "../../../productsMocks";
import { useParams, useNavigate } from "react-router-dom";
import CounterContainer from "../../common/counter/CounterContainer";
import "./ItemDetailContainer.css";
import { CartContext } from "../../../context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemDetailContainer = () => {
  const { addToCart, getQuantityById } = useContext(CartContext);
  const [producto, setProducto] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const totalQuantity = getQuantityById(id);

  useEffect(() => {
    let productoSeleccionado = products.find(
      (elemento) => elemento.id === parseInt(id)
    );

    const tarea = new Promise((resolve, reject) => {
      resolve(productoSeleccionado);
    });

    tarea.then((resolve) => {
      setProducto(resolve);
    });
  }, [id]);

  const onAdd = (cantidad) => {
    let productCart = { ...producto, quantity: cantidad };
    addToCart(productCart);
    toast.success("Producto agregado exitosamente", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div className="detail" key={producto.id}>
      <Card className="icard">
        <CardMedia
          component="img"
          height="250"
          image={producto.img}
          className="detailImg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {producto.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {producto.description}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {producto.price}
          </Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>
      <div>
        <CounterContainer
          stock={producto.stock}
          onAdd={onAdd}
          initial={totalQuantity}
        />
        <ToastContainer />
      </div>
    </div>
  );
};
export default ItemDetailContainer;
