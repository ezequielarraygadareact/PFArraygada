//Recursos
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Swal from "sweetalert2";
//Logica
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import CounterContainer from "../../common/counter/CounterContainer";
import "./ItemDetailContainer.css";
import { CartContext } from "../../../context/CartContext";
import { getDoc, collection, doc } from "firebase/firestore"
import { dat } from "../../../firebaseconfig";
import { ProductionQuantityLimits } from "@mui/icons-material";



const ItemDetailContainer = () => {
  const { addToCart, getQuantityById } = useContext(CartContext);
  const [producto, setProducto] = useState({});
  const { id } = useParams();

  const totalQuantity = getQuantityById(id);

  useEffect(() => {
  let productsCollection = collection(dat , "products" )
  let selectCollection = doc(productsCollection , id )
  getDoc(selectCollection).then( (d) => {
    setProducto({...d.data(), id: d.id});
  });
  }, [id]);

  const onAdd = (cantidad) => {
    let productCart = { ...producto , quantity: cantidad };
    addToCart(productCart);

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Su producto fue agregado al carrito',
      showConfirmButton: false,
      timer: 1100,
    });
  };

  return (
    <div className="detail">
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
      <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        {(typeof(totalQuantity) === "undefined" || producto.stock > totalQuantity) &&
        producto.stock > 0 && (
          <CounterContainer
        stock={producto.stock}
        onAdd={onAdd}
        initial={totalQuantity}
      />
        )}
        {producto.stock === 0 && 
      <Typography variant="h5" style={{alignSelf:"center",  marginTop:"2%"}} >
        FUERA DE STOCK
      </Typography>
      }
      {typeof(totalQuantity) !== "undefined" &&
      totalQuantity === producto.stock && (
        <Typography variant="subtitle1" style={{alignSelf:"center", marginTop:"2%"}} >
        Usted cuenta con la cantidad maxima en el carrito
      </Typography>
      )}
      </div>
    </div>
  );
};
export default ItemDetailContainer;
