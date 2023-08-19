import "./ItemListContainer.css";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dat } from "../../../firebaseconfig";
import { getDocs, collection, query, where } from "firebase/firestore"


const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {

    let productsCollection = collection(dat, "products")
    let categoryCollection = query(productsCollection, where("category", "==", categoryName))
    
    let consulta
    if(categoryName){
      consulta = categoryCollection
    }else{
      consulta = productsCollection
    }
    getDocs(consulta)

    
  }, [categoryName]);

  return <ItemList items={items} />;
};

export default ItemListContainer;
