import { Component } from 'react'
import CardItem from './card-item'

class CardList extends Component {

    render() {
        return (
            <div className='card-list'>
                <h3 className="card-list__title">
                    All (123)
                </h3>
                {new Array(8).fill(0).map((card, index) => (
                    <CardItem key={index} {...card}/>
                ))}

            </div>
        )
    }
}

export default CardList
