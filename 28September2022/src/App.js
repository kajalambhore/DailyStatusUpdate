import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/front/header/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import data from "./components/back/Data";
import AllRoutes from "./components/front/allroutes/AllRoutes";
import { useState } from "react";

function App() {
  const { productItems } = data;
  const [cartItems, setCartItems] = useState([]);
  const handleAddProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);

    if (productExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  return (
    <div>
      <BrowserRouter>
        <Header />
        <AllRoutes
          productItems={productItems}
          handleAddProduct={handleAddProduct}
          cartItems={cartItems}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
