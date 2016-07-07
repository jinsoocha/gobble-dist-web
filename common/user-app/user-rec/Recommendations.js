import React, { Component, PropTypes } from 'react';

import Recommendation from './Recommendation';

class Recommendations extends Component {
  componentDidMount() {
    this.props.getRecs(this.props.facebookId);
  }

  render() {
    return (
      <div className="recs">
        {this.props.recs ? this.props.recs.map(rec => <Recommendation {...rec} />) : null}
      </div>

    );
  }

}

Recommendations.propTypes = {
  facebookId: PropTypes.number,
  recs: PropTypes.array,
  getRecs: PropTypes.func
};

export default Recommendations;
