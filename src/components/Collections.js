import { useSelector } from 'react-redux';

import BusinessCard from './BusinessCard'
function Collections(){
    const myCollections = useSelector(state => state.collectionsReducer.value)

    return (
        <div className='Collections'>
            <h2>My Favorites</h2>
            {myCollections.map(collection => {
                return (
                    <BusinessCard business={collection}></BusinessCard>
                )
            })}
        </div>
    )
}

export default Collections;