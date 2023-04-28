import { combineReducers } from '@reduxjs/toolkit'
import businessesReducer from '../features/businesses/businessesThunk'
import searchReducer from '../features/search/searchSlice'
import sessionReducer from '../features/session/sessionSlice'
import collectionsReducer from '../features/collections/collectionsSlice'

const reducer = combineReducers({
    searchReducer,
    sessionReducer,
    businessesReducer,
    collectionsReducer
})

export default reducer
