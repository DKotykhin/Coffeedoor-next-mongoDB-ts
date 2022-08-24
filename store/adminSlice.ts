import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ICard, INewCardData } from "../types/cardType";
import { IMenu } from "../types/menuType";

interface IData {
    collection: string;
    carddata: ICard[];
    menudata: IMenu[];
}
interface IState {
    collectiondata: IData;
    id: string;
}

const initialState: IState = {
    collectiondata: {
        collection: "",
        carddata: [],
        menudata: [],
    },
    id: "",
};

const collectionSlice = createSlice({
    name: "collection",
    initialState,
    reducers: {

        getCollectionItems: (state, action: PayloadAction<IData>) => {
            state.collectiondata = action.payload;
        },

        updateCardItem: (state, action: PayloadAction<{data: INewCardData, id: string}>) => {
            const newCollectionItems = state.collectiondata.carddata.map(
                (item) => {
                    if (item._id === action.payload.id) {
                        const newItem = {
                            _id: item._id,
                            ...action.payload.data,
                        };
                        return newItem;
                    } else {
                        return item;
                    }
                }
            );
            state.collectiondata.carddata = newCollectionItems.sort((a, b) =>
                a.position > b.position ? 1 : -1
            );
        },
        updateMenuItem: (state, action: PayloadAction<{data: any, id: string}>) => {
            const newCollectionItems = state.collectiondata.menudata.map(
                (item) => {
                    if (item._id === action.payload.id) {
                        const newItem = {
                            _id: item._id,
                            ...action.payload.data,
                        };
                        return newItem;
                    } else {
                        return item;
                    }
                }
            );
            state.collectiondata.menudata = newCollectionItems.sort((a, b) =>
                a.position > b.position ? 1 : -1
            );
        },

        deleteCardItem: (state, action: PayloadAction<string>) => {
            const newCollectionItems = state.collectiondata.carddata.filter(
                (item) => item._id !== action.payload
            );
            state.collectiondata.carddata = newCollectionItems;
        },
        deleteMenuItem: (state, action: PayloadAction<string>) => {
            const newCollectionItems = state.collectiondata.menudata.filter(
                (item) => item._id !== action.payload
            );
            state.collectiondata.menudata = newCollectionItems;
        },

        cloneId: (state, action: PayloadAction<string>) => {
            state.id = action.payload;
        },

        addCardItem: (state, action: PayloadAction<ICard>) => {
            state.collectiondata.carddata = [
                ...state.collectiondata.carddata,
                action.payload,
            ].sort((a, b) => (a.position > b.position ? 1 : -1));
        },
        addMenuItem: (state, action: PayloadAction<any>) => {
            state.collectiondata.menudata = [
                ...state.collectiondata.menudata,
                action.payload,
            ].sort((a, b) => (a.position > b.position ? 1 : -1));
        },
    },
});

const { actions, reducer } = collectionSlice;

export default reducer;
export const {
    getCollectionItems,
    updateCardItem,
    updateMenuItem,
    deleteCardItem,
    deleteMenuItem,
    addCardItem,
    addMenuItem,
    cloneId,
} = actions;
