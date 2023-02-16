import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { newSearch } from '../features/search/searchSlice'
import { getBusinesses } from '../features/businesses/businessesThunk'

function SearchBusiness(){
    const [searchString, setSearchString] = useState('')
    const searchTerm = useSelector(state => state.searchReducer.value)

    const dispatch = useDispatch()

    useEffect(() => {
        (async function() {
            navigator.geolocation.getCurrentPosition(
                async function(position){
                    dispatch(getBusinesses({ position: position, searchTerm: searchTerm }));
                }
            )
        })()
    }, [searchTerm])

    return (
        <form>
            <input
                className='searchBusinessInput'
                placeholder='tacos, cheap dinner, target'
                onChange={(e) => {setSearchString(e.target.value)}}
                value={searchString}
                required
            />
            <button
                className='search-btn hover-effect'
                onClick={(e) => {
                    e.preventDefault();
                    dispatch(newSearch(searchString))
            }}>
                Search
            </button>
        </form>
    )
}

export default SearchBusiness;
