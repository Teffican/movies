import { Component } from 'react'
import CardList from '../components/card/list'
import Categories from '../components/categories'
import Search from '../components/search'

class Home extends Component {
    state = {
        activeCategory: {title: 'All', value: 'all'}
    }

    changeCategory = (category: {title: string, value: string}) => {
        this.setState({
            ...this.state,
            activeCategory: {title: category.title, value: category.value}
        })
    }

    render() {
        return (
            <div className='container'>
                <Search activeCategory={this.state.activeCategory.value}/>
                <Categories changeCategory={this.changeCategory}/>
                <CardList activeCategory={this.state.activeCategory.title}/>
            </div>
        )
    }
}

export default Home
