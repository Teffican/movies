import { Component } from 'react'
import { connect } from 'react-redux'
import { RootState } from '../../redux/store';
import CardLoader from './loader';
import CardNotFound from './not-found';

type CardListEmptyType = {
    isLoading: boolean
}

const mapStateToProps = (state: RootState) => ({
    isLoading: state.products.isLoading
});

class CardListEmpty extends Component<CardListEmptyType> {
    render() {
        const {isLoading} = this.props
        return (
            <>
                {isLoading
                    ? new Array(8).fill(0).map((_, index) => (
                        <CardLoader key={index}/>
                    ))
                    : <CardNotFound />
                }
            </>
            
        )
    }
}

export default connect(mapStateToProps)(CardListEmpty) 
