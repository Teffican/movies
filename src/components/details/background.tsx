import React, { Component } from 'react'
import { connect } from 'react-redux';
import { RootState } from '../../redux/store';
import { ProductType } from '../../types/product.type';
import DetailsBreadcrumbs from './breadcrumbs'

type DetailsBackgroundType = {
    selectedProduct: ProductType,
    productType: string,
    isDetailsLoading: boolean
}

const mapStateToProps = (state: RootState) => ({
    selectedProduct: state.products.selectedProduct,
    isDetailsLoading: state.products.isDetailsLoading
});

class DetailsBackground extends Component<DetailsBackgroundType> {
    render() {
        const {backdrop_path, title, name} = this.props.selectedProduct
        const {isDetailsLoading} = this.props
        const imgSrc = 'https://image.tmdb.org/t/p/w1280/' + backdrop_path
        const productTitle = title ? title : name
        
        return (
            <div className='details__background'>
                {isDetailsLoading
                ? <div className="details__background-img loader"></div>
                : <img className='details__background-img' src={imgSrc} alt={productTitle} />
                }
                <DetailsBreadcrumbs title={productTitle} productType={this.props.productType}/>
            </div>
        )
    }
}

export default connect(mapStateToProps)(DetailsBackground) 
