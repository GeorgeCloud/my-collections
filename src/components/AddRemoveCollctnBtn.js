import { addToCollection, removeFromCollection } from '../features/collections/collectionsSlice'
import { useSelector, useDispatch } from 'react-redux';

export default function AddRemoveCollctnBtn({ business }){
    const myCollections = useSelector(state => state.collectionsReducer.businesses)
    const dispatch = useDispatch();
    const inCollection = myCollections.includes(business)

    return (
            <button
                className='cta-btn hover-effect'
                onClick={() => {
                    inCollection
                    ? dispatch(removeFromCollection(business))
                    : dispatch(addToCollection(business))
                    }}
                >{inCollection? 'Remove' : 'Add'}
            </button>
    )
}
