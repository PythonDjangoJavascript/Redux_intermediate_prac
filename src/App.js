import Layout from "./components/Layout/Layout";
import Cart from "./components/Cart/Cart";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification"

import { postCardData } from "./store/cart-slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


// to check if app component is loading for the first time
let isInitial = true

function App() {
  const showCart = useSelector(state => state.ui.cartIsVisisable)
  const cart = useSelector(state => state.cart)
  const notificaton = useSelector(state => state.ui.notification)

  const dispatch = useDispatch()

  useEffect(() => {

    // block running the async fucntion to run for the first time
    if (isInitial) {
      isInitial = false
      return
    }

    dispatch(postCardData(cart))
    // creating seperate fucnc as we shouldn't use async fucnction
    // for useEffect fucnction
    // const sendUpdatedCart = async () => {
    //   dispatch(uiActions.setNotificaton({
    //     status: "loading",
    //     title: "adding item...",
    //     message: "adding item to the cart"
    //   }))

    //   const response = await fetch('https://reactdemoproject-69436-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json', {
    //     method: 'PUT',
    //     body: JSON.stringify(cart)
    //   })

    //   if (!response.ok) {
    //     throw new Error('Updating Cart Faild Please, relaod your page and Try agin!!')
    //   }

    //   dispatch(uiActions.setNotificaton({
    //     status: "success",
    //     title: "Success",
    //     message: "Successfully added to the Cart"
    //   }))
    // }

    // sendUpdatedCart().catch(error => {
    //   console.log(error.message)
    //   dispatch(uiActions.setNotificaton({
    //     status: "error",
    //     title: "Error",
    //     message: "Filed to add, please try agin"
    //   }))
    // })

  }, [cart, dispatch])

  return (
    <>
      {notificaton && (
        <Notification
          status={notificaton.status}
          title={notificaton.title}
          message={notificaton.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
