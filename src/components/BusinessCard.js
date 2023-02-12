import Categories from './Categories'

function BusinessCard(props){
    const { business } = props;

    return (
        <a href={business.url}>
            <div className="business-card" key={business.name}>
                <div className='thumbnail'>
                    <img src={ business.image_url } alt="Business Thumbnail"></img>
                </div>

                <div>
                    <h3>{ business.name } - <span className='price'>{ business.price }</span></h3>

                    <img className="pin-icn" src="https://cdn-icons-png.flaticon.com/512/484/484167.png" alt="pin icon"/>
                    <span>{ business.location.address1 }</span>

                    {/* business.categories */}
                    <Categories categories={ ['water', 'water', 'water'] }></Categories>
                </div>

                <div className='footer'>
                    <div className='rating'>
                        <p>{ business.rating } ({ business.review_count })</p>
                    </div>

                    <div className='add-button'>
                        <button>add to collection</button>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default BusinessCard;