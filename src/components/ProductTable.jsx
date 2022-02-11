import React from 'react';
import ProductRow from './ProductRow';

function ProductTable ({products}) {

    return(
        <table>
            <thead>
                <tr>
                 <th>Name</th>
                 <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) =>{
                return <ProductRow name={product.name} price={product.price} inStock={product.inStock} />
                }
                )}
            </tbody>
        </table>
    )
}

export default ProductTable;
