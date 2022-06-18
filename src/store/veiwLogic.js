import { createSlice } from '@reduxjs/toolkit';

const initialviewstate = { showCart: false };
const view_logic_slice = createSlice(

    {
        name: 'viewlogic',
        initialState: initialviewstate,
        reducers: {
            toggleView(state) {
                state.showCart = !state.showCart;
            }
        }

    }
)

export const viewActions = view_logic_slice.actions;
export default view_logic_slice;