import { Component } from 'react'
import CardItem from './card-item'

type CardListType = {
    activeCategory: string
}

class CardList extends Component<CardListType> {
    render() {
        return (
            <div className='card-list'>
                <h3 className="card-list__title">
                    {this.props.activeCategory} (123)
                </h3>
                {new Array(8).fill(0).map((card, index) => (
                    <CardItem key={index} id={index} {...card}/>
                ))}

            </div>
        )
    }
}

export default CardList
