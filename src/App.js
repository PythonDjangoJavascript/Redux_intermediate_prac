import Layout from "./components/Layout/Layout";
import Cart from "./components/Cart/Cart";
import Products from "./components/Shop/Products";

import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const showCart = useSelector(state => state.ui.cartIsVisisable)
  const cart = useSelector(state => state.cart)

  useEffect(() => {
    fetch('https://reactdemoproject-69436-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json', {
      method: 'PUT',
      body: JSON.stringify(cart)
    })
  }, [cart])

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
