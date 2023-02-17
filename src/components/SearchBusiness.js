import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getBusinesses } from '../features/businesses/businessesThunk'
import SearchBusinessForm from './SearchBusinessForm'

function SearchBusiness(){
    const searchTerm = useSelector(state => state.searchReducer.value)
    const dispatch   = useDispatch()

    useEffect(() => {
        (async function() {
            navigator.geolocation.getCurrentPosition(async function(position){
                dispatch(
                    getBusinesses({ position: position, searchTerm: searchTerm })
                )
            })
        })()
    }, [searchTerm])

    return (
        <SearchBusinessForm />
    )
}

export default SearchBusiness;
