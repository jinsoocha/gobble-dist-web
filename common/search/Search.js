import React, { Component, PropTypes } from 'react';
import MainLayoutContainer from './../main-layout/MainLayoutContainer';

class Search extends Component {
  // The componentDidMount lifecycle method will only kick off client-side
  componentDidMount() {
    console.log('API calls to search for:', this.props.query);
  }

  render() {
    const { query } = this.props;
    return (
      <MainLayoutContainer>
        <h1 className="search-results-title">Search results for "{query}"</h1>
        <p>The search results populated into this page will be dynamic and dependent upon the url.</p>
      </MainLayoutContainer>
    );
  }
}

Search.propTypes = {
  query: PropTypes.string.isRequired
};

// SearchContainer

import { connect } from 'react-redux';

const mapStateToProps = state => ({
  query: state.search.resultsQuery
});

export default connect(mapStateToProps)(Search);
