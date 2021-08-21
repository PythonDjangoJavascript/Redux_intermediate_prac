import { createSlice } from "@reduxjs/toolkit";


const initialCartState = { cartIsVisisable: false }

const uiSlice = createSlice({
    name: 'ui',
    initialState: initialCartState,
    reducers: {
        toggle(state) {
            state.cartIsVisisable = !state.cartIsVisisable
        }
    }
})

export const uiActions = uiSlice.actions
export default uiSlice.reducer