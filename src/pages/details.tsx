import React, { Component } from 'react'
import DetailsBackground from '../components/details/background'
import DetailsInfo from '../components/details/info'
import '../styles/details.scss'

class Details extends Component {
    render() {
        return (
            <div className='details'>
                <div className="container">
                    <DetailsBackground />
                    <DetailsInfo />
                </div>
            </div>
        )
    }
}

export default Details
