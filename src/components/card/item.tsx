import { Component } from 'react'
import '../../styles/card.scss'
import { Link } from 'react-router-dom'
import { ProductType } from '../../types/product.type'

class CardItem extends Component<ProductType> {
    render() {
        let {id, vote_average, poster_path, name, title} = this.props
        const imgSrc = 'https://image.tmdb.org/t/p/w500/' + poster_path
        title = title ? title : name

        return (
            <Link to={`details/id${id}`}>
                <div className='card-list__item'>
                    <div className="card-list__item-grade grade">
                        {vote_average}
                    </div>
                    <div className="card-list__item-img-wrap">
                        <img  className="card-list__item-img" src={imgSrc} alt={title} />
                    </div>
                    <div className="card-list__item-title">
                        {title}
                    </div>
                </div>  
            </Link>
        )
    }
}

export default CardItem
