import Navbar from "./components/layout/Navbar/Navbar";
import Cart from "./components/pages/cart/Cart";
import ItemListConteiner from "./components/pages/itemList/ItemListConteiner";
import Nf404 from "./components/pages/nf404/nf404";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailConteiner from "./components/pages/ItemDetail/ItemDetailConteiner";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<ItemListConteiner />} />
          <Route
            path="/category/:categoryName"
            element={<ItemListConteiner />}
          />
          <Route path="/cart" element={Cart} />
          <Route path="itemDetail/:id" element={<ItemDetailConteiner />} />
        </Route>

        <Route path="*" element={<Nf404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
