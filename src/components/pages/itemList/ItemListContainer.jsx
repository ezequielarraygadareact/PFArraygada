import "./ItemListContainer.css";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dat } from "../../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore"


const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {

    let productsCollection = collection(dat, "products")

    
    let consulta;
    if(categoryName){
      consulta = query(productsCollection, where("category", "==", categoryName))
    }else{
      consulta = productsCollection
    }
    getDocs(consulta).then((res)=>{
      let products = res.docs.map(docs =>{
        return {...docs.data(), id: docs.id}
      }  )
      setItems(products)
    })

    
  }, [categoryName]);

  return <ItemList items={items} />;
};

export default ItemListContainer;
