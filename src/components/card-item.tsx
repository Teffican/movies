import { Component } from 'react'
import '../styles/card.scss'
import image from '../images/potter.jpg'

class CardItem extends Component {
    render() {
        return (
            <div className='card-list__item'>
                <div className="card-list__item-grade">
                    6.8
                </div>
                <div className="card-list__item-img-wrap">
                    <img  className="card-list__item-img" src={image} alt="" />
                </div>
                <div className="card-list__item-title">
                    Harry Potter and the Order of the Phoenix
                </div>
            </div>
        )
    }
}

export default CardItem
