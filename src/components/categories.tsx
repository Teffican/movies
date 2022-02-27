import { Component } from 'react'
import { connect } from 'react-redux';
import { RootState } from '../redux/store';
import '../styles/categories.scss'
import { filterProducts } from '../redux/slices/products'

type CategoriesType = {
    changeCategory: (category: string) => void
    filterProducts: (categoryValue: string) => void
}

const mapStateToProps = (state: RootState) => ({
    initialProducts: state.products.initialList,
    filteredProducts: state.products.filteredList,
    isLoading: state.products.isLoading
});

const mapDispatchToProps = () => ({ 
    filterProducts
});

class Categories extends Component<CategoriesType> {
    state = {
        categories: [
            {title: 'All', value: 'all'},
            {title: 'Movies', value: 'movie'},
            {title: 'Tv Shows', value: 'tv'},
        ],
        activeIndicatorStyle: {left: '8px'}
    }

    handleClick = (e: any) => {
        this.setState({
            ...this.state,
            activeIndicatorStyle: {left: e.target.offsetLeft}
        })
        this.props.changeCategory(e.target.innerText)
        this.props.filterProducts(e.target.dataset.value)
    }

    render() {
        return (
            <div className='categories'>
                {this.state.categories.map((category, index) => (
                    <div 
                    className={`categories__item`} 
                    key={index}
                    data-value={category.value}
                    onClick={this.handleClick}
                    >
                        {category.title}
                    </div>
                ))}
                <div className="categories__active-indicator" style={this.state.activeIndicatorStyle}>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(Categories) 
