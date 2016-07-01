import React, { PropTypes } from 'react';

const CategorySelection = (props) => {
  const { category } = props;
  return (
    <option value={category}>{category}</option>
  );
};

CategorySelection.propTypes = {
  category: PropTypes.string.isRequired,
};

export default CategorySelection;
