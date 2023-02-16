import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { newSearch } from '../features/search/searchSlice'

function SearchBusiness(){
    const [searchString, setSearchString] = useState('')
    const dispatcher = useDispatch()

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
                    dispatcher(newSearch(searchString))
            }}>
                Search
            </button>
        </form>
    )
}

export default SearchBusiness;
