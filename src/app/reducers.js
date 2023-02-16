import { combineReducers } from '@reduxjs/toolkit'
import businessesReducer from '../features/businesses/businessesThunk'
import searchReducer from '../features/search/searchSlice'

const reducer = combineReducers({
    searchReducer,
    businessesReducer
})

export default reducer
