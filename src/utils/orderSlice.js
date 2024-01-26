import { createSlice,current } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name:"order",
    initialState: {
        orderId: null,
        orders: []
    },
    reducers:{
        addToOrderHistory: (state, action) => {
            //state.orders = [...state.orders, action.payload];
            state.orders.push(action.payload)
          },
    }
})

export const {addToOrderHistory} =orderSlice.actions;
export default orderSlice.reducer;