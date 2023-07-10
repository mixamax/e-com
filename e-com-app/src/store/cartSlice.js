import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItemsProps: [],
    total: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem(state, actions) {
            const isItemExist = state.cartItemsProps.find(
                (item) => item.id === actions.payload.id
            );
            if (isItemExist) {
                isItemExist.quantity += 1;
                // state.total = state.total + isItemExist.price;
            } else {
                state.cartItemsProps.push({
                    id: actions.payload.id,
                    name: actions.payload.name,
                    price: actions.payload.price,
                    url: actions.payload.url,
                    quantity: 1,
                });
            }
            state.total += actions.payload.price;
        },
        removeItem(state, actions) {
            const item = state.cartItemsProps.find(
                (item) => item.id === actions.payload.id
            );
            state.total -= item.price;
            state.cartItemsProps = state.cartItemsProps.filter(
                (item) => item.id !== actions.payload.id
            );
        },
        plusQuantity(state, actions) {
            const item = state.cartItemsProps.find(
                (item) => item.id === actions.payload.id
            );
            item.quantity++;
            state.total += actions.payload.price;
        },
        minusQuantity(state, actions) {
            const item = state.cartItemsProps.find(
                (item) => item.id === actions.payload.id
            );
            if (item.quantity > 1) {
                item.quantity--;
                state.total -= actions.payload.price;
            } else {
                return;
            }
        },
    },
});

export const { addItem, removeItem, plusQuantity, minusQuantity } =
    cartSlice.actions;
export default cartSlice.reducer;
