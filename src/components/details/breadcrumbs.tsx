import React, { Component } from 'react'
import { Link } from 'react-router-dom'

type DetailsBreadcrumbsType = {
    title: string,
    productType: string
}

class DetailsBreadcrumbs extends Component<DetailsBreadcrumbsType> {
    render() {
        return (
            <div className='details__breadcrumbs'>
                <div className="details__breadcrumbs-path">
                    <Link to="/">Homepage</Link> / {this.props.productType === 'movie' ? 'Movie' : 'Tv Shows'}
                </div>
                <h3 className="details__breadcrumbs-title">
                    {this.props.title}
                </h3>
            </div>
        )
    }
}

export default DetailsBreadcrumbs
