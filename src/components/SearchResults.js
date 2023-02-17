import BusinessCard from './BusinessCard'
import '../styles/Businesses.css'

function SearchResults({ businesses }){
    return (
            <div className="business-card-grid">
                {businesses && (
                    businesses.map(business => {
                        return (
                            <BusinessCard business={business} key={business.id} />
                        )
                    })
                )}
            </div>
    )
}

export default SearchResults;
