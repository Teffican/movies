import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class DetailsBreadcrumbs extends Component {
    render() {
        return (
            <div className='details__breadcrumbs'>
                <div className="details__breadcrumbs-path">
                    <Link to="/">Homepage</Link> / details
                </div>
                <h3 className="details__breadcrumbs-title">
                    Harry Potter and the Order of the Phoenix
                </h3>
            </div>
        )
    }
}

export default DetailsBreadcrumbs
