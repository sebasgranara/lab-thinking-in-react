import React from 'react';
import ProductRow from './ProductRow';

function ProductTable ({products}) {
  return <table>
      <thead>
          <tr>
              <th>Name</th>
              <th>Price</th>
          </tr>
      </thead>
      <tbody>
      {products.map((product)=>{
          return <ProductRow {...product}/>
            }
          )
      }
      </tbody>

  </table>;
  
};

export default ProductTable;
