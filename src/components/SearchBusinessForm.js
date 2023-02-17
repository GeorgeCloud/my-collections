
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { newSearch } from '../features/search/searchSlice'

export default function SearchBusinessForm(){
    const [searchString, setSearchString] = useState('')
    const dispatch = useDispatch()

    return (
            <form>
                <input
                    className='searchBusinessInput'
                    placeholder='tacos, cheap dinner, target'
                    onChange={(e) => setSearchString(e.target.value)}
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
