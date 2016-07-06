import React, { PropTypes } from 'react';

const ResultsOptions = (props) => {
  const { changeResultsView, numUsers, numProducts, numReviews } = props;
  return (
    <div>
      <div className="search-summary">
        Found
        <span className="search-summary-value">&nbsp;{numUsers}</span> users,
        <span className="search-summary-value">&nbsp;{numProducts}</span> products, &
        <span className="search-summary-value">&nbsp;{numReviews}</span> reviews.
      </div>
      <div className="results-options pure-menu pure-menu-horizontal">
        <ul className="pure-menu-list">
          <li className="pure-menu-item">
            <span className="pure-menu-link" onClick={changeResultsView.bind(null, 'all')}>All</span>
          </li>
          <li className="pure-menu-item">
            <span className="pure-menu-link" onClick={changeResultsView.bind(null, 'users')}>Users</span>
          </li>
          <li className="pure-menu-item">
            <span className="pure-menu-link" onClick={changeResultsView.bind(null, 'products')}>Products</span>
          </li>
          <li className="pure-menu-item">
            <span className="pure-menu-link" onClick={changeResultsView.bind(null, 'reviews')}>Review</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

ResultsOptions.propTypes = {
  numUsers: PropTypes.number.isRequired,
  numProducts: PropTypes.number.isRequired,
  numReviews: PropTypes.number.isRequired,
  changeResultsView: PropTypes.func.isRequired
};

export default ResultsOptions;
