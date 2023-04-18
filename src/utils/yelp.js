// https://docs.developer.yelp.com/docs
// Daily API limit	5000.0

// Fetch Yelp data through internal proxy server
async function searchYelpBusinesses(position, searchTerm){
  const url = 'api/businesses?' + new URLSearchParams({
    latitude  : position.coords.latitude,
    longitude : position.coords.longitude,
    term     : searchTerm
  }).toString();

  const proxyResponse = await fetch(url);
  const yelpData = await proxyResponse.json();

  return yelpData.businesses
}

export default searchYelpBusinesses;
