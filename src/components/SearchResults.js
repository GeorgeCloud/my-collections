import BusinessCard from './BusinessCard'

function SearchResults({ businesses }){
    return (
        <div className="business-card-grid">
            {businesses && (
                businesses.map(business => {
                    return (
                        <BusinessCard business={business} />
                    )
                })
            )}
        </div>
    )
}

export default SearchResults;