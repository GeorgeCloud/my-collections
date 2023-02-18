import { useSelector } from 'react-redux';

import BusinessCard from './BusinessCard'
function Collections(){
    const myCollections = useSelector(state => state.collectionsReducer.businesses)

    return (
            <div>
                <div className='page-header'>
                    <h2>My Collections</h2>
                    <p>{myCollections.length} items</p>
                    <p>Joined today</p>
                </div>

                <div className='business-card-grid'>
                    {myCollections.map(collection => {
                        return (
                            <BusinessCard business={collection}></BusinessCard>
                        )
                    })}
                </div>
            </div>
    )
}

export default Collections;
