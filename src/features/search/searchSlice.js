import { createSlice } from '@reduxjs/toolkit'

export const search = createSlice({
    name: 'search',
    initialState: {
        searchTerm: 'food'
    },
    reducers: {
        newSearch: (state, action) => { state.searchTerm = action.payload }
    }
})

export const { newSearch } = search.actions

export default search.reducer
