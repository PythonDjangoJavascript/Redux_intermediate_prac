import { createSlice } from "@reduxjs/toolkit";


const initialCartState = { cartIsVisisable: false, notification: null }

const uiSlice = createSlice({
    name: 'ui',
    initialState: initialCartState,
    reducers: {
        toggle(state) {
            state.cartIsVisisable = !state.cartIsVisisable
        },
        setNotificaton(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            }
        }
    }
})

export const uiActions = uiSlice.actions
export default uiSlice.reducer