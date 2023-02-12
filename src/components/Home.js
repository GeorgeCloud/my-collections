import '../styles/Home.css'
import SearchBusiness from './SearchBusiness'
import SearchResults from './SearchResults'
import searchYelpBusinesses from '../utils/yelp'
import { useEffect, useState } from 'react'

function Home(){
    const [businesses, setBusinesses] = useState([])

    useEffect(() => {
        (async function() {
            const coords = {latitude: '37.7749', longitude: '-122.4194'}
            const searchQuery = 'burgers'
            const businessesData = await searchYelpBusinesses(coords, searchQuery)
            setBusinesses(businessesData);
        })()
    }, [])

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
