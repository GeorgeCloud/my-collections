import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import searchYelpBusinesses from '../../utils/yelp'

export const getBusinesses = createAsyncThunk(
    'businesses/getBusinesses',
    async (query) => {
      return await searchYelpBusinesses(query.position, query.searchTerm)
    },
)

export const businessesSlice = createSlice({
    name: 'businesses',
    initialState: {
      value: [],
      isLoading: null
    },
    reducers: {
    },
    extraReducers: (builder) => {
      builder
        .addCase(getBusinesses.pending, (state) => {
          state.isLoading = true
        })
        .addCase(getBusinesses.fulfilled, (state, action) => {
          state.value = action.payload
          state.isLoading = false
        })
    },
})

export const { update } = businessesSlice.actions

export default businessesSlice.reducer
