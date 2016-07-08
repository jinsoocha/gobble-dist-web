import React, { PropTypes } from 'react';

const LiveOptions = (props) => {
  const { changeLiveOptionsView } = props;
  return (
    <div className="live-options pure-menu pure-menu-horizontal">
      <ul className="pure-menu-list">
        <li className="pure-menu-item">
          <span className="live-option pure-menu-link" onClick={changeLiveOptionsView.bind(null, 'all')}>All</span>
        </li>
        <li className="pure-menu-item">
          <span className="live-option pure-menu-link" onClick={changeLiveOptionsView.bind(null, 'active')}>Active</span>
        </li>
        <li className="pure-menu-item">
          <span className="live-option pure-menu-link" onClick={changeLiveOptionsView.bind(null, 'ended')}>Ended</span>
        </li>
        <li className="pure-menu-item">
          <span className="live-option live-option-global pure-menu-link" onClick={changeLiveOptionsView.bind(null, 'global')}>Global</span>
        </li>
      </ul>
    </div>
  );
};

LiveOptions.propTypes = {
  view: PropTypes.string.isRequired,
  changeLiveOptionsView: PropTypes.func.isRequired
};

export default LiveOptions;
