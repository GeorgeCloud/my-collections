import Categories from './Categories'
import pinIcon from '../assets/pin.png';

function BusinessCard(props){
    const { business } = props;

    return (
            <div className="business-card">
                <a href={business.url} target="_blank">

                    <div className='thumbnail'>
                        <img src={ business.image_url } alt="Business Thumbnail"></img>
                    </div>

                    <div>
                        <h3>
                            { business.name }
                            <span className='price'> - { business.price }</span>
                        </h3>

                        <img className="pin-icn" src={pinIcon} alt="pin icon"/>
                        <span>{ business.location.address1 }</span>

                        <Categories categories={ business.categories.map(cate => {return cate.title}) } />
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
                        <button className='cta-btn hover-effect'>Add</button>
                    </div>
                </div>
            </div>
    )
}

export default BusinessCard;