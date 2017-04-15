import React from 'react';
import PropTypes from 'prop-types';
import './Search.css';

function Search(props) {
  const {
    value,
    onSearch,
  } = props;

  return (
    <input
      placeholder="Filter news by search term"
      className="search"
      type="text"
      value={value}
      onChange={onSearch}
      autoFocus
    />
  );
};

Search.propTypes = {
  value: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
};

export default Search;

