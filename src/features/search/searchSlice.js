import { createSlice } from '@reduxjs/toolkit'

export const search = createSlice({
    name: 'search',
    initialState: {
        value: 'food'
    },
    reducers: {
        newSearch: (state, action) => { state.value = action.payload }
    }
})

export const { newSearch } = search.actions

export default search.reducer
