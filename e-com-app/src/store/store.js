import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "./cartSlice";

const store = configureStore({
    reducer: {
        cartReduser: cartSliceReducer,
    },
});

export default store;
