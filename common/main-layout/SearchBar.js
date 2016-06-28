import React, { PropTypes, Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    // Using bind/arrow functions is an inefficient practice:
    // http://stackoverflow.com/questions/36677733/why-jsx-props-should-not-use-arrow-functions
    // It's best to use bind within the constructor.
    this.handleSearchBarChange = this.handleSearchBarChange.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
  }

  handleSearchBarChange(event) {
    this.props.updateSearchBarQuery(event.target.value);
  }

  submitSearch(event) {
    if (event.keyCode === 13 && this.props.searchBarQuery !== '') { // enter
      window.location.href = `/search?q=${this.props.searchBarQuery}`;
    }
  }

  render() {
    const { searchBarQuery } = this.props;
    return (
      <span className="search-bar">
        <i className="fa fa-search" aria-hidden="true"></i>
        <input
          type="text"
          placeholder="Search Gobble"
          value={searchBarQuery}
          onChange={this.handleSearchBarChange}
          onKeyDown={this.submitSearch}
        />
      </span>
    );
  }
}

SearchBar.propTypes = {
  searchBarQuery: PropTypes.string.isRequired,
  updateSearchBarQuery: PropTypes.func.isRequired
};

export default SearchBar;
