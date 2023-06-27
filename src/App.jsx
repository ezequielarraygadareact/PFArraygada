import Navbar from "./assets/components/layout/Navbar/Navbar";
import Home from "./assets/components/pages/home/Home";
import Cart from "./assets/components/pages/cart/Cart";
import ItemListConteiner from "./assets/components/pages/ItemListConteiner/itemListConteiner";
import { useState } from "react";

function App() {
  const [saludo, setSaludo] = useState("Bienvenidos a mi tienda");

  return (
    <div>
      <Navbar />
      <ItemListConteiner saludo={saludo} />
    </div>
  );
}

export default App;
