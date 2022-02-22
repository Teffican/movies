import { Component } from 'react'
import CardList from '../components/card-list'
import Categories from '../components/categories'
import Search from '../components/search'

class Home extends Component {
    state = {
        activeCategory: 'All'
    }

    changeCategory = (category: string) => {
        this.setState({
            ...this.state,
            activeCategory: category
        })
    }

    render() {
        return (
            <div className='container'>
                <Search />
                <Categories changeCategory={this.changeCategory}/>
                <CardList activeCategory={this.state.activeCategory}/>
            </div>
        )
    }
}

export default Home
