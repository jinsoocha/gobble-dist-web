import React, { Component, PropTypes } from 'react';
import MainLayoutContainer from './../main-layout/MainLayoutContainer';

import ResultsOptionsContainer from './ResultsOptionsContainer';
import ReviewResultsContainer from './ReviewResultsContainer';
import UserResultsContainer from './UserResultsContainer';
import ProductResultsContainer from './ProductResultsContainer';

class Search extends Component {
  // The componentDidMount lifecycle method will only kick off client-side
  componentDidMount() {
    setTimeout(() => {
      this.props.fetchSearchResults(this.props.query);
    }, 500);
  }

  render() {
    const { query, isLoading, view } = this.props;

    let SearchView;
    if (isLoading) {
      SearchView = () => (
        <div className="search-view">
          <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
        </div>
      );
    } else {
      if (view === 'users') {
        SearchView = () => (
          <div className="search-view">
            <ResultsOptionsContainer />
            <UserResultsContainer />
          </div>
        );
      } else if (view === 'products') {
        SearchView = () => (
          <div className="search-view">
            <ResultsOptionsContainer />
            <ProductResultsContainer />
          </div>
        );
      } else if (view === 'reviews') {
        SearchView = () => (
          <div className="search-view">
            <ResultsOptionsContainer />
            <ReviewResultsContainer />
          </div>
        );
      } else { // view === 'all'
        SearchView = () => (
          <div className="search-view">
            <ResultsOptionsContainer />
            <UserResultsContainer />
            <ProductResultsContainer />
            <ReviewResultsContainer />
          </div>
        );
      }
    }

    return (
      <MainLayoutContainer>
        <div className="search">
          <h1 className="search-title">Search results for "{query}"</h1>
          <SearchView />
        </div>
      </MainLayoutContainer>
    );
  }
}

Search.propTypes = {
  query: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  view: PropTypes.string.isRequired,
  fetchSearchResults: PropTypes.func.isRequired
};

export default Search;
