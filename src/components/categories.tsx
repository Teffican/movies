import { Component } from 'react'
import '../styles/categories.scss'

type CategoriesType = {
    changeCategory: (category: string) => void
}

class Categories extends Component<CategoriesType> {
    state = {
        categories: ['All', 'Movies', 'Tv Shows'],
        activeIndicatorStyle: {left: '8px'}
    }

    handleClick = (e: any) => {
        this.setState({
            ...this.state,
            activeIndicatorStyle: {left: e.target.offsetLeft}
        })
        this.props.changeCategory(e.target.innerText)
    }

    render() {
        return (
            <div className='categories'>
                {this.state.categories.map((category, index) => (
                    <div 
                    className={`categories__item`} 
                    key={index} 
                    onClick={this.handleClick}
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
