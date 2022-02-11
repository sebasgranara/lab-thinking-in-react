import React from 'react';

function SearchBar ({
    onChangeInput,
    onChangeCheck
}) {
  return <div>
      <label>Search</label>
      <input type="text" onChange={(e)=>{onChangeInput(e)}}/>
      <p><input type="checkbox" onChange={(e)=>{onChangeCheck(e)}}/> Only show products in stock</p>
  </div>;
};

export default SearchBar;
