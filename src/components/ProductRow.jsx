import React from 'react';
import './ProductRow.css';

function ProductRow ({name, price, inStock}) {
  return <tr className={!inStock && "noStock"}>
      <td>{name}</td>
      <td>{price}</td>
  </tr>;
};

export default ProductRow;
