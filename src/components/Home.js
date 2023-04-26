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
        <h1 className='home-title'>
          <span className='app-name'>Yelp</span>&nbsp;
          by&nbsp;
          <a href="https://georgecloud.github.io/Resume">
            <u>George Ceja</u>
          </a>
        </h1>

        <p>Discover places <u>around you</u> and add them to your personal <u>collections</u>!</p>

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
