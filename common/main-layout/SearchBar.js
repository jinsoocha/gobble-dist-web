import React, { PropTypes, Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    // Using bind/arrow functions is an inefficient practice:
    // http://stackoverflow.com/questions/36677733/why-jsx-props-should-not-use-arrow-functions
    // It's best to use bind within the constructor.
    this.handleSearchBarChange = this.handleSearchBarChange.bind(this);
  }

  handleSearchBarChange(event) {
    this.props.updateSearchBarQuery(event.target.value);
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
