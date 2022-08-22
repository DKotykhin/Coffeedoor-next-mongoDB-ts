import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    collectiondata: {},
    id: ''
};

const collectionSlice = createSlice({
    name: "collection",
    initialState,
    reducers: {
        getCollectionItems: (state, action) => {
            state.collectiondata = action.payload

        },
        updateCollectionItem: (state, action) => {
            const newCollectionItems = state.collectiondata.data.map(item => {
                if (item._id === action.payload.id) {
                    const newItem = {
                        _id: item._id,
                        ...action.payload.data,
                    };
                    return newItem
                } else {
                    return item;
                }
            });
            state.collectiondata.data = newCollectionItems.sort((a, b) =>
                a.position > b.position ? 1 : -1);
        },
        deleteCollectionItem: (state, action) => {
            const newCollectionItems = state.collectiondata.data.filter(item =>
                item._id !== action.payload)
            state.collectiondata.data = newCollectionItems;
        },
        cloneId: (state, action) => {
            state.id = action.payload
        },
        addCollectionItem: (state, action) => {
            state.collectiondata.data = [...state.collectiondata.data, action.payload].sort((a, b) =>
                a.position > b.position ? 1 : -1)
        }
    },
});

const { actions, reducer } = collectionSlice;

export default reducer;
export const {
    getCollectionItems,
    updateCollectionItem,
    deleteCollectionItem,
    addCollectionItem,
    cloneId
} = actions;