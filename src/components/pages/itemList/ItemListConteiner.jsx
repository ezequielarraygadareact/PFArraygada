import "./ItemListConteiner.css";
import ItemList from "./ItemList";
import { products } from "../../../productsMocks";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemListConteiner = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState({});

  const { categoryName } = useParams();

  useEffect(() => {
    let productsFiltrados = products.filter(
      (elemento) => elemento.category === categoryName
    );
    const tarea = new Promise((resolve, reject) => {
      resolve(categoryName === undefined ? products : productsFiltrados);
    });

    tarea
      .then((respuesta) => setItems(respuesta))
      .catch((error) => setError(error));
  }, [categoryName]);

  return <ItemList items={items} />;
};

export default ItemListConteiner;
