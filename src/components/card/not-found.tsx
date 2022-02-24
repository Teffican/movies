import { Component } from 'react'

class CardNotFound extends Component {
    render() {
        return (
            <div className='card-list__not-found'>
                <h2 className="card-list__not-found-title">
                    Sorry, No results found
                </h2>
                <p className="card-list__not-found-subtitle">
                    There are no movies or TV shows matching your search terms.
                </p>
            </div>
        )
    }
}

export default CardNotFound