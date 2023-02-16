import { createSlice } from "@reduxjs/toolkit";

export const collectionsSlice = createSlice({
    name: 'collections',
    initialState: {
        value: []
    },
    reducers: {
        addToCollection: (state, action) => {state.value.push(action.payload)},
        removeFromCollection: (state, action) => {
            console.log(action.payload)
        },

    },
})

export const { addToCollection, removeFromCollection } = collectionsSlice.actions

export default collectionsSlice.reducer
