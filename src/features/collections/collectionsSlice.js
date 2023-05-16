import { createSlice } from "@reduxjs/toolkit";

export const collectionsSlice = createSlice({
    name: 'collections',
    initialState: {
        businesses: []
    },
    reducers: {
        addToCollection: (state, action) => {state.businesses.push(action.payload)},
        removeFromCollection: (state, action) => {
            state.businesses = state.businesses.filter(business => business.id !== action.payload.id)
        },

    },
})

export const { addToCollection, removeFromCollection } = collectionsSlice.actions

export default collectionsSlice.reducer
