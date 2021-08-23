import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        changed: false
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
            state.changed = true
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
            state.changed = true
        },
        replaceCart(state, aciton) {
            state.items = aciton.payload.items
            state.totalQuantity = aciton.payload.totalQuantity
        }
    }
})


export const cartActions = cartSlice.actions
export default cartSlice.reducer