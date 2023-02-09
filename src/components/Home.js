import '../styles/Home.css'
import BusinessCard from './BusinessCard'
import searchYelpBusinesses from '../utils/yelp'

// const businesses = searchYelpBusinesses('taco bell');

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
    return (
        <div>
            <h1>Yelp</h1>

            <div>
                <input
                    className='searchBusinessInput'
                    placeholder='tacos, cheap dinner, target'
                    required
                />
                <button
                className='searchButton'
                onClick={() => console.log('clicked')}>
                    Search
                    {/* <img src='https://cdn-icons-png.flaticon.com/512/1086/1086916.png'></img> */}
                </button>
            </div>

            <div className="apiResults">
                {businessesMockData.map(business => {
                    return (
                        <BusinessCard business={business} />
                    )
                })}
            </div>
        </div>
    )
}

export default Home