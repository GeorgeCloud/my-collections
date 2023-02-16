import { combineReducers } from '@reduxjs/toolkit'
import businessesReducer from '../features/businesses/businessesThunk'
import searchReducer from '../features/search/searchSlice'
import collectionsReducer from '../features/collections/collectionsSlice'


const reducer = combineReducers({
    searchReducer,
    businessesReducer,
    collectionsReducer
})

export default reducer
