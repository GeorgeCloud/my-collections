import '../styles/Home.css'
import { useSelector } from 'react-redux'
import SearchBusiness from './SearchBusiness'
import SearchResults from './SearchResults'
import LoadingScreen from './LoadingScreen'

function Home(){
    // Reminder: rename state object names -> https://redux.js.org/usage/structuring-reducers/using-combinereducers
    let isLoading = useSelector(state => state.businessesReducer.isLoading)
    let businesses = useSelector(state => state.businessesReducer.value)

    return (
        <main>
            <div className='page-header'>
                <h1>Yelp</h1>
                <p>Create a <u>collection</u> of place you love going to!</p>

                <SearchBusiness/>
            </div>

            <div className='content'>
                {isLoading
                    ? <LoadingScreen />
                    : <SearchResults businesses={businesses}/>
                }
            </div>
        </main>
    )
}

export default Home;
