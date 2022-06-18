import { configureStore } from '@reduxjs/toolkit';
import viewlogicSlice from './veiwLogic';
import cart_slice from './cartSlice';

const store = configureStore({ reducer: { viewlogic: viewlogicSlice.reducer, cartval: cart_slice.reducer } });

export default store;