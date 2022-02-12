import React from 'react';

function SearchBar ({
    handleInput,
    handleCheckBox
}) {
  return <div>
      <label>Search</label>
      <input type="text" onChange={handleInput}/>
      <p><input type="checkbox" 
      onChange={handleCheckBox}/> Only show products in stock</p>
  </div>;
};

export default SearchBar;
