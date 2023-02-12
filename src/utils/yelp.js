// https://docs.developer.yelp.com/docs
// Daily API limit	5000.0

// Fetch Yelp data through internal proxy server
async function searchYelpBusinesses(coords, searchQuery){
  const url = '/businesses?' + new URLSearchParams({
    latitude  : coords['latitude'],
    longitude : coords['longitude'],
    query     : searchQuery
  }).toString();

  const proxyResponse = await fetch(url);
  const yelpData = await proxyResponse.json();

  return yelpData.businesses
}

export default searchYelpBusinesses;
