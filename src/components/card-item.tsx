import { Component } from 'react'
import '../styles/card.scss'
import image from '../images/potter.jpg'
import { Link } from 'react-router-dom'

type CardItemType = {
    id: number
}

class CardItem extends Component<CardItemType> {
    render() {
        return (
            <Link to={`details/id${this.props.id}`}>
                <div className='card-list__item'>
                    <div className="card-list__item-grade grade">
                        6.8
                    </div>
                    <div className="card-list__item-img-wrap">
                        <img  className="card-list__item-img" src={image} alt="" />
                    </div>
                    <div className="card-list__item-title">
                        Harry Potter and the Order of the Phoenix
                    </div>
                </div>  
            </Link>
        )
    }
}

export default CardItem
