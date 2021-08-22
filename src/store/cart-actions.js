import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";


// Action async fucntion to execute outside of the redux
export const fetchCartData = () => {
    return async (dispatch) => {

        // fetch data from firebase
        const fetchCartItems = async () => {
            const response = await fetch('https://reactdemoproject-69436-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json')

            if (!response.ok) {
                throw new Error("faled to get cart data")
            }

            const data = await response.json()
            return data
        }

        try {
            const cartData = await fetchCartItems()
            if (cartData.items) {
                dispatch(cartActions.replaceCart(cartData))
            }
        } catch (error) {
            dispatch(uiActions.setNotificaton({
                status: "error",
                title: "Error",
                message: "Filed to load, cart data, Please reload"
            }))
        }
    }
}

export const postCartData = (cart) => {
    return async (dispatch) => {
        dispatch(uiActions.setNotificaton({
            status: "loading",
            title: "adding item...",
            message: "adding item to the cart"
        }))
        const sendUpdatedCart = async () => {

            const response = await fetch('https://reactdemoproject-69436-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json', {
                method: 'PUT',
                body: JSON.stringify(cart)
            })

            if (!response.ok) {
                throw new Error('Updating Cart Faild Please, relaod your page and Try agin!!')
            }

            // if it pass ok condition means response status is OK
            dispatch(uiActions.setNotificaton({
                status: "success",
                title: "Success",
                message: "Successfully added to the Cart"
            }))
        }

        sendUpdatedCart().catch(error => {
            dispatch(uiActions.setNotificaton({
                status: "error",
                title: "Error",
                message: "Filed to add, please try agin"
            }))
        })
        // try {
        //     await sendUpdatedCart()
        // } catch (error) {
        //     dispatch(uiActions.setNotificaton({
        //         status: "error",
        //         title: "Error",
        //         message: "Filed to add, please try agin"
        //     }))
        // }
    }
}