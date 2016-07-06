import React, { PropTypes } from 'react';

const UserBlock = (props) => {
  return (
    <div>user</div>
  );
};

UserBlock.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserBlock;
