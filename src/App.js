import Layout from "./components/Layout/Layout";
import Cart from "./components/Cart/Cart";
import Products from "./components/Shop/Products";

import { useSelector } from "react-redux";

function App() {
  const showCart = useSelector(state => state.ui.cartIsVisisable)
  const isAuthenticated = useSelector(state => state.ui.cartIsVisisable)
  console.log(isAuthenticated)

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
