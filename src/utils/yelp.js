// https://docs.developer.yelp.com/docs
// Daily API limit	5000.0

async function searchYelpBusinesses(){
  // Fetch Yelp data through internal proxy server

  const url = '/businesses?' + new URLSearchParams({ latitude: 37.7749, longitude: -122.4194 }).toString()

  const proxyResponse = await fetch(url);
  const yelpData = await proxyResponse.json();

  return yelpData.businesses
}

export default searchYelpBusinesses;
