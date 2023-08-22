import { addDoc, collection } from "firebase/firestore"
import { products } from "../../../productsMocks"
import { dat } from "../../../firebaseConfig"




const Dashboard = () => {

    const actualizar = () => {
        products.forEach((product)=>{
            let refCollection = collection(dat, "products")
            addDoc(refCollection, product)
        })   
    }

    return (
    <div>
    <button onClick={actualizar}>
        Actualizar base de datos
    </button>
    </div>
  )
}

export default Dashboard