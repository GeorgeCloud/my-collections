import '../styles/Home.css'
import { useSelector } from 'react-redux'
import SearchBusiness from './SearchBusiness'
import SearchResults from './SearchResults'

function Home(){
    // Reminder: rename state object names -> https://redux.js.org/usage/structuring-reducers/using-combinereducers
    let businesses = useSelector(state => state.businessesReducer.value)

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
