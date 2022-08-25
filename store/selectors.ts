import type { RootState } from './store'

export const selectBasket = (state: RootState) => state.basket;
export const selectCollection = (state: RootState) => state.collection;