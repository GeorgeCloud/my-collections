import Categories from './Categories'

function BusinessCard(props){
    const { business } = props;

    return (
        <div className="single-result">
            <div className='thumbnail'>
                <img src={ business.imgUrl } alt="Business Thumbnail"></img>
            </div>

            <div>
                <h3>{ business.name }</h3>

                <img className="pin-icn" src="https://cdn-icons-png.flaticon.com/512/484/484167.png" alt="pin icon"/>
                <span>{ business.location }</span>

                <Categories categories={ business.categories }></Categories>
            </div>

            <div className='footer'>
                <div>
                    <p>{ business.rating } ({ business.numOfReviews })</p>
                </div>

                <div>
                    <p>{ business.price }</p>
                </div>
            </div>
        </div>
    )
}

export default BusinessCard;