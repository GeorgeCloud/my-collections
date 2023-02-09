import '../styles/Home.css'
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
            <input placeholder='tacos, cheap dinner, target'></input>

            <div className="apiResults">
                {businessesMockData.map(business => {
                    return (
                        <div className="single-result">
                            <div className='thumbnail'>
                                <img src={business.imgUrl} alt="Business Thumbnail"></img>
                            </div>

                            <div>
                                <h3>{ business.name }</h3>
                                <p>{ business.location }</p>

                                <small>
                                    { business.rating } { business.numOfReviews }
                                </small>
                                <div className='categories'>
                                    {business.categories.map(category => {
                                        return(
                                            <div className='category'>
                                                <small>{ category }</small>
                                            </div>
                                        )
                                    })}
                                </div>
                                
                                
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home