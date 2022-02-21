import React, { Component } from 'react'
import image from '../../images/potter.jpg'
import DetailsBreadcrumbs from './breadcrumbs'

class DetailsBackground extends Component {
    render() {
        return (
            <div className='details__background'>
                <img className='details__background-img' src={image} alt="" />
                <DetailsBreadcrumbs />
            </div>
        )
    }
}

export default DetailsBackground
