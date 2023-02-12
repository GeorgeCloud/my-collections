import Categories from './Categories'
import pinIcon from '../assets/pin.png';

function BusinessCard(props){
    const { business } = props;

    return (
            <div className="business-card" key={business.name}>
                <div className='thumbnail'>
                    <img src={ business.image_url } alt="Business Thumbnail"></img>
                </div>

                <a href={business.url}>
                    <div>
                        <h3>
                            { business.name }
                            <span className='price'> - { business.price }</span>
                        </h3>

                        <img className="pin-icn" src={pinIcon} alt="pin icon"/>
                        <span>{ business.location.address1 }</span>

                        {/* business.categories */}
                        <Categories categories={ ['Sea Food', 'Vegan', 'American'] }></Categories>
                    </div>
                </a>

                <div className='footer'>
                    <div className='rating'>
                        <p>
                            { business.rating }☆ 
                            (<u>{ business.review_count }</u>)
                        </p>
                    </div>

                    <div className='right-div'>
                        <button>add to collection</button>
                    </div>
                </div>
            </div>
    )
}

export default BusinessCard;