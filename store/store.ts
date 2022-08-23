import { configureStore } from '@reduxjs/toolkit';

import basket from './basketSlice';
import collection from './adminSlice'

const store = configureStore({
    reducer: { basket, collection },
    devTools: process.env.NODE_ENV !== 'production'
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;