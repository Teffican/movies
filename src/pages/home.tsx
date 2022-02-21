import React, { Component } from 'react'
import CardList from '../components/card-list'
import Categories from '../components/categories'
import Header from '../components/header'
import Search from '../components/search'

class Home extends Component {
    render() {
        return (
            <div className='container'>
                <Search />
                <Categories />
                <CardList />
            </div>
        )
    }
}

export default Home
