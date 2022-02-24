import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import DetailsBackground from '../components/details/background'
import DetailsInfo from '../components/details/info'
import { RootState } from '../redux/store';
import { fetchProductDetails } from '../redux/slices/products'
import '../styles/details.scss'
import { useParams } from 'react-router-dom';

const Details = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const productId = params.id ? +params.id : 0
    const productType = params.type ? params.type : ''
    
    React.useEffect(() => {
        dispatch(fetchProductDetails({type: productType, id: productId}))
    }, [])

    return (
        <div className='details'>
            <div className="container">
                <DetailsBackground productType={productType}/>
                <DetailsInfo productType={productType}/>
            </div>
        </div>
    )
}

export default Details
