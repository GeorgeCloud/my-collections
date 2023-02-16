import '../styles/Home.css'
import SearchBusiness from './SearchBusiness'
import SearchResults from './SearchResults'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getBusinesses } from '../features/businesses/businessesThunk'

function Home(){
    // Reminder: rename state object names -> https://redux.js.org/usage/structuring-reducers/using-combinereducers
    let searchTerm = useSelector(state => state.searchReducer.value)
    let businesses = useSelector(state => state.businessesReducer.value)
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
        <main>
            <div className='page-header'>
                <h1>Yelp</h1>
                <p>Create a <u>collection</u> of place you love going to!</p>

                <SearchBusiness/>
            </div>

            <SearchResults businesses={businesses}/>
        </main>
    )
}

export default Home;
