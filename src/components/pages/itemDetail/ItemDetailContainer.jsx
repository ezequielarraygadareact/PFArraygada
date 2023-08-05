import { useEffect, useState, useContext } from "react";
import { products } from "../../../productsMocks";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";
import { CartContext } from "../../../context/CartContext";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const ItemDetailContainer = () => {
  const { addToCart, getQuantityById } = useContext(CartContext);
  const [producto, setProducto] = useState({});
  const { id } = useParams();

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

    return (
      <ItemDetail
        producto={producto}
        onAdd={onAdd}
        totalQuantity={totalQuantity}
        addToCart={addToCart}
      />
    );
  };
};

export default ItemDetailContainer;
