import React, { PropTypes } from 'react';

const UserResult = (props) => (
  <div className="user-result">
    <div>
      <a href={`/${props.user.facebook_id}`}>
        <img alt="User Result" className="user-result-image" src={props.user.photo_url} />
      </a>
    </div>
    <div>
      <a className="user-result-name" href={`/${props.user.facebook_id}`}>{props.user.display_name}</a>
    </div>      
  </div>
);

const UserResults = (props) => (
  <div className="search-results user-results">
    <h3 className="search-results-title">Users</h3>
    {props.userResults.map(user =>
      <UserResult
        key={user.facebook_id}
        user={user}
      />
    )}
  </div>
);

UserResults.propTypes = {
  userResults: PropTypes.array.isRequired
};

export default UserResults;
