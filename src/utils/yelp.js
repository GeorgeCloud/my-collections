// https://docs.developer.yelp.com/docs
// Daily API limit	5000.0
// const YELP_CLIENT_ID = ''

async function searchYelpBusinesses(businessName){
    const YELP_API_URL   = 'https://api.yelp.com/v3/businesses/search?location=san%20francisco&sort_by=best_match&limit=20'
    const YELP_API_KEY   = ''

    const options = {
        method: 'GET',
        'mode': 'no-cors',
        'Access-Control-Allow-Origin': '*',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${YELP_API_KEY}`
        }
    }
      
    fetch(YELP_API_URL, options)
        .then(response => response.json())
        .then(responseData => console.log(responseData))
        .catch(error => console.error(error))

    // return yelpBusinesses
}

export default searchYelpBusinesses;