import { useEffect, useState } from "react";
import { products } from "../../../productsMocks";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const { id } = useParams();

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
  }, []);
  return <ItemDetail producto={producto} />;
};

export default ItemDetailContainer;
