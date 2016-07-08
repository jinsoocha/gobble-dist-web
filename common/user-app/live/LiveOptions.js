import React, { Component, PropTypes } from 'react';

class LiveOptions extends Component {
  constructor(props) {
    super(props);
    this.showAllOptions = this.showAllOptions.bind(this);
    this.showActiveOptions = this.showActiveOptions.bind(this);
    this.showEndedOptions = this.showEndedOptions.bind(this);
    this.showGlobalOptions = this.showGlobalOptions.bind(this);
  }

  showAllOptions() {
    this.props.changeLiveListFilter('all');
    this.props.changeLiveOptionsView('all');
  }

  showActiveOptions() {
    this.props.changeLiveListFilter('active');
    this.props.changeLiveOptionsView('active');
  }

  showEndedOptions() {
    this.props.changeLiveListFilter('ended');
    this.props.changeLiveOptionsView('ended');
  }

  showGlobalOptions() {
    this.props.changeLiveOptionsView('global');
  }

  render() {
    return (
      <div className="live-options pure-menu pure-menu-horizontal">
        <ul className="pure-menu-list">
          <li className="pure-menu-item">
            <span className="live-option pure-menu-link" onClick={this.showAllOptions}>All</span>
          </li>
          <li className="pure-menu-item">
            <span className="live-option pure-menu-link" onClick={this.showActiveOptions}>Active</span>
          </li>
          <li className="pure-menu-item">
            <span className="live-option pure-menu-link" onClick={this.showEndedOptions}>Ended</span>
          </li>
          <li className="pure-menu-item">
            <span className="live-option live-option-global pure-menu-link" onClick={this.showGlobalOptions}>Global</span>
          </li>
        </ul>
      </div>
    );
  }
}

LiveOptions.propTypes = {
  changeLiveOptionsView: PropTypes.func.isRequired,
  changeLiveListFilter: PropTypes.func.isRequired
};

export default LiveOptions;
