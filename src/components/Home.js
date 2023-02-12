import '../styles/Home.css'
import SearchBusiness from './SearchBusiness'
import SearchResults from './SearchResults'
import searchYelpBusinesses from '../utils/yelp'
import { useEffect, useState } from 'react'

const business = {
    'id': 0,
    'name': 'La Mar',
    'imgUrl': 'https://s3-media0.fl.yelpcdn.com/bphoto/hI4L8cMY1JY_UKq7ZYBpTw/o.jpg',
    'categories': ['Latin America', 'Seafood', 'Peruvian'],
    'numOfReviews': 0,
    'price': '$$$',
    'location': 'Embarcadero',
    'rating': 4.5,
}

const businessesMockData = [
    business, business, business,
    business, business, business,
    business, business, business,
    business
]

function Home(){
    const [businesses, setBusinesses] = useState([])

    useEffect(() => {
        async function x(){
            const businessesData = await searchYelpBusinesses()
            setBusinesses(businessesData);
        }
        x()
    }, [])

    return (
        <main>
            <div className='page-header'>
                <h1>Yelp</h1>
                <p>Create a <u>collection</u> of place you love going to!</p>

                <SearchBusiness/>
            </div>

            <SearchResults businesses={businesses}/>
            {/* {yelpData.then(data => {
                return <p>{data}</p>
                // return <SearchResults businesses={yelpData}/>
            })} */}
        </main>
    )
}

export default Home;
