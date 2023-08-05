import CartContainer from "../components/pages/cart/CartContainer";
import CheckoutContainer from "../components/pages/checkout/CheckoutContainer";
import ItemDetailConteiner from "../components/pages/itemDetail/ItemDetailContainer";
import ItemListContainer from "../components/pages/itemList/ItemListContainer";

export const routes = [
  {
    id: "home",
    path: "/",
    Element: ItemListContainer,
  },
  {
    id: "categories",
    path: "/category/:categoryName",
    Element: ItemListContainer,
  },
  {
    id: "detail",
    path: "/itemDetail/:id",
    Element: ItemDetailConteiner,
  },
  {
    id: "cart",
    path: "/cart",
    Element: CartContainer,
  },
  {
    id: "checkout",
    path: "/checkout",
    Element: CheckoutContainer,
  },
];
