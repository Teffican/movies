import { Component } from 'react'
import { connect } from 'react-redux'
import { fetchProducts } from '../../redux/slices/products'
import { RootState } from '../../redux/store'
import { ProductType } from '../../types/product.type'
import CardItem from './item'
import CardListEmpty from './list-empty'

type CardListType = {
    activeCategory: string,
    initialProducts: ProductType[],
    currentProducts: ProductType[],
    fetchProducts: () => void,
    isLoading: boolean
}

const mapStateToProps = (state: RootState) => ({
    initialProducts: state.products.initialList,
    currentProducts: state.products.currentList,
    isLoading: state.products.isLoading
});

const mapDispatchToProps = () => ({ 
    fetchProducts
});

class CardList extends Component<CardListType> {

    componentDidMount = () => {
        this.props.fetchProducts()
    }

    render() {
        const {currentProducts, activeCategory} = this.props
        const cards = currentProducts

        return (
            <div className='card-list'>
                {!!cards?.length &&
                <h3 className="card-list__title">
                    {activeCategory} ({cards.length})
                </h3>
                }
                {cards?.length
                    ? cards.map((card: ProductType) => (
                        <CardItem key={card.id} {...card}/>
                    ))
                    : <CardListEmpty />
                }
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(CardList) 
