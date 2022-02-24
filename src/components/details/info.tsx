import React, { Component } from 'react'
import { connect } from 'react-redux';
import { RootState } from '../../redux/store';
import { ProductType } from '../../types/product.type';

type DetailsInfoType = {
    selectedProduct: ProductType,
    productType: string,
    isDetailsLoading: boolean
}

const mapStateToProps = (state: RootState) => ({
    selectedProduct: state.products.selectedProduct,
    isDetailsLoading: state.products.isDetailsLoading
});

class DetailsInfo extends Component<DetailsInfoType> {
    render() {
        const {poster_path, name, title, tagline, overview, vote_average, 
            release_date, runtime, genres, first_air_date, 
            number_of_episodes, number_of_seasons} 
        = this.props.selectedProduct
        const {productType, isDetailsLoading} = this.props

        const imgSrc = 'https://image.tmdb.org/t/p/w500/' + poster_path
        const date = release_date ? release_date : first_air_date
        const productTitle = title ? title : name

        return (
            <div className='details__container'>
                <div className="details__image-wrap">
                    {isDetailsLoading
                    ? <div className='details__image loader'></div>
                    :  <img className="details__image" src={imgSrc} alt={productTitle}/>
                    }
                </div>
                <div className="details__info">
                    <h4 className="details__info-title">
                        {tagline}
                    </h4>
                    <div className="details__info-subtitle">
                        {overview}
                    </div>
                    <div className="details__info-grade grade">
                        {vote_average}
                    </div>
                    <div className="details__info-type">
                        <div className="details__info-item-title">
                            Type
                        </div>
                        {productType === 'movie' ? 'Movie' : 'Tv Shows'}
                    </div>
                    <div className="details__info-date">
                        <div className="details__info-item-title">
                            Release date
                        </div>
                        {date}
                    </div>
                    {runtime &&
                    <div className="details__info-duration">
                        <div className="details__info-item-title">
                            Run time
                        </div>
                        {runtime} minutes
                    </div>
                    }
                    {number_of_seasons &&
                    <div className="details__info-seasons">
                        <div className="details__info-item-title">
                            Seasons
                        </div>
                        {number_of_seasons}
                    </div>}
                    {number_of_episodes &&
                    <div className="details__info-episodes">
                        <div className="details__info-item-title">
                            Episodes
                        </div>
                        {number_of_episodes}
                    </div>}
                    <div className="details__info-genres">
                        <div className="details__info-item-title">
                            Genres
                        </div>
                        {genres?.map((genre, index) => (
                            `${genre.name}${index + 1 !== genres?.length ? ', ' : ''}`
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(DetailsInfo)
