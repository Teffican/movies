import { Component } from "react";
import '../styles/search.scss'

class Search extends Component {
    render() {
        return (
            <div className="search">
                <input
                    className="search__input" 
                    type="search" 
                    placeholder="eg. Avengers"
                />
                <div className="search__title">
                    Search movies or tv-shows
                </div>
            </div>
        );
    }
}

export default Search;
