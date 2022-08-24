import { createSlice } from "@reduxjs/toolkit";

import { ICard } from "../types/cardType";
import { IMenu } from "../types/menuType";

type AdminState = {
    collectiondata: {
        collection: string;
        carddata: ICard[];
        menudata: IMenu[];
    };
    id: string;
};

const initialState: AdminState = {
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
        getCollectionItems: (state, action) => {
            state.collectiondata = action.payload;
        },
        updateCollectionItem: (state, action) => {
            if (action.payload.collection === "menu_multilang") {
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
                state.collectiondata.menudata = newCollectionItems.sort(
                    (a, b) => (a.position > b.position ? 1 : -1)
                );
            } else {
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
                state.collectiondata.carddata = newCollectionItems.sort(
                    (a, b) => (a.position > b.position ? 1 : -1)
                );
            }            
        },
        deleteCollectionItem: (state, action) => {
            if (action.payload.collection === "menu_multilang") {
                const newCollectionItems = state.collectiondata.menudata.filter(
                    (item: { _id: string }) => item._id !== action.payload.id
                );
                state.collectiondata.menudata = newCollectionItems;
            } else {
                const newCollectionItems = state.collectiondata.carddata.filter(
                    (item: { _id: string }) => item._id !== action.payload.id
                );
                state.collectiondata.carddata = newCollectionItems;
            }
        },
        cloneId: (state, action) => {
            state.id = action.payload;
        },
        addCollectionItem: (state, action) => {
            if (action.payload.collection === "menu_multilang") {
                state.collectiondata.menudata = [
                    ...state.collectiondata.menudata,
                    action.payload.newItem,
                ].sort((a, b) => (a.position > b.position ? 1 : -1));
            } else {
                state.collectiondata.carddata = [
                    ...state.collectiondata.carddata,
                    action.payload.newItem,
                ].sort((a, b) => (a.position > b.position ? 1 : -1));
            }
        },
    },
});

const { actions, reducer } = collectionSlice;

export default reducer;
export const {
    getCollectionItems,
    updateCollectionItem,
    deleteCollectionItem,
    addCollectionItem,
    cloneId,
} = actions;
