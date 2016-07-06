import React, { PropTypes } from 'react';

const ResultsOptions = (props) => {
  const { changeResultsView } = props;
  return (
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
          <span className="pure-menu-link" onClick={changeResultsView.bind(null, 'reivews')}>Review</span>
        </li>
      </ul>
    </div>
  );
};

ResultsOptions.propTypes = {
  changeResultsView: PropTypes.func.isRequired
};

export default ResultsOptions;
