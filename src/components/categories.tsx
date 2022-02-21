import { Component } from 'react'
import '../styles/categories.scss'

class Categories extends Component {
    state = {
        activeCategory: 'All',
        categories: ['All', 'Movies', 'Tv Shows'],
        activeIndicatorStyle: {left: '8px'}
    }

    changeCategory = (e: any) => {
        this.setState({
            ...this.state,
            activeCategory: e.target.innerText,
            activeIndicatorStyle: {left: e.target.offsetLeft}
        })
    }

    render() {
        return (
            <div className='categories'>
                {this.state.categories.map((category, index) => (
                    <div 
                    className={`categories__item`} 
                    key={index} 
                    onClick={this.changeCategory}
                    >
                        {category}
                    </div>
                ))}
                <div className="categories__active-indicator" style={this.state.activeIndicatorStyle}>
                </div>
            </div>
        )
    }
}

export default Categories
