import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    items: null,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        listItem: (state, action) => {
            state.items = action.payload
        },
        flushItems: (state) => {
            state.items = null
        }
    }
})

export const { listItem, listItems } = cartSlice.actions
export default cartSlice.reducer