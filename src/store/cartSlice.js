import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
    items: [],
    totalQuantity: 0,
    totalCartPrice: 0,
};


const cart_slice = createSlice(
    {
        name: 'cart',
        initialState: initialCartState,
        reducers: {
            add_to_cart(state, action) {
                state.totalQuantity++;

                const newItem = action.payload;
                state.totalCartPrice = state.totalCartPrice + newItem.price
                const existingItem = state.items.find((item) => item.id === newItem.id);
                if (!existingItem) {
                    state.items.push(
                        {
                            id: newItem.id,
                            quantity: 1,
                            price: newItem.price,
                            totalPrice: newItem.price,
                            title: newItem.title,
                            description: newItem.description,
                        }
                    )
                }
                else {

                    existingItem.quantity = existingItem.quantity + 1;
                    existingItem.totalPrice = existingItem.totalPrice + newItem.price;
                }


            },
            remove_from_cart(state, action) {
                state.totalQuantity--;

                const id = action.payload;

                const existingItem = state.items.find((item) => { return item.id === id });
                const item_price = existingItem.price;
                state.totalCartPrice = state.totalCartPrice - item_price;

                if (existingItem.quantity === 1) {

                    state.items = state.items.filter((item) => { return item.id !== id });

                }
                else {
                    existingItem.quantity--;
                    existingItem.totalPrice = existingItem.totalPrice - existingItem.price;

                }
            }

        }
    }
)

export const cartActions = cart_slice.actions;
export default cart_slice;