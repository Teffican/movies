import { Component } from "react";
import { connect } from "react-redux";
import { RootState } from "../redux/store";
import '../styles/search.scss'
import { search, filter } from '../redux/slices/products'

type SearchType = {
    search: (searchValue: string) => void,
    filter: (category: string) => void,
    activeCategory: string 
}

const mapStateToProps = (state: RootState) => ({
    
});

const mapDispatchToProps = () => ({ 
    search,
    filter
});

class Search extends Component<SearchType> {
    state = {
        searchValue: ''
    }

    handleChange = (e: any) => {
        this.setState({
            ...this.state,
            searchValue: e.target.value
        })
    }

    componentDidUpdate = () => {
        this.props.filter(this.props.activeCategory)
        this.props.search(this.state.searchValue)
    }

    render() {

        return (
            <div className="search">
                <input
                    className={this.state.searchValue 
                        ? 'search__input search__input_with-text' 
                        : 'search__input'
                    }
                    type="search" 
                    placeholder="eg. Avengers"
                    onChange={this.handleChange}
                    value={this.state.searchValue}
                />
                <div className="search__title">
                    Search movies or tv-shows
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(Search);
