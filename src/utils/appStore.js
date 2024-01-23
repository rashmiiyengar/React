import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import orderReducer from "./orderSlice";

const appStore = configureStore({

reducer : {
    cart: cartReducer,
    order: orderReducer
}

}
);

export default appStore;
