import { createSlice } from "@reduxjs/toolkit";

import { uiActions } from "./ui-slice";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0
    },
    reducers: {
        addItem(state, action) {
            const newItem = action.payload
            // lest check if it already exists in the cart
            const existingItem = state.items.find(item => newItem.id === item.id)

            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    title: newItem.title,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price
                })
            } else {
                existingItem.quantity++
                existingItem.totalPrice = existingItem.quantity * existingItem.price
            }
            state.totalQuantity++
        },
        removeItem(state, action) {
            // here we reciece only id through payload
            const id = action.payload
            const existingItem = state.items.find(item => item.id === id)

            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id)
            } else {
                existingItem.quantity--
                existingItem.totalPrice = existingItem.quantity * existingItem.price
            }
            state.totalQuantity--
        }
    }
})


// Action async fucntion to execute outside of the redux
export const postCardData = (cart) => {
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

export const cartActions = cartSlice.actions
export default cartSlice.reducer