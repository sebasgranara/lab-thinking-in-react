import { useState } from 'react';
import jsonData from './../data.json';
import SearchBar  from './SearchBar'
import ProductTable from './ProductTable';

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  const [search, setSearch] = useState();


  const handleInput= e => setSearch(e.target.value);
    

    const result=products.filter((product)=>{
      return (product.name.toLowerCase());
    });
    
    setProducts([...result]);
  
  const handleCheckBox = e => setSearch(e.target.checked);
    

    if(currentCheck){
      result=products.filter((product)=>product.inStock);
    }
    
    setProducts([...result]);
  


  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar handleInput={handleInput} handleCheckBox={handleCheckBox}/>
        <ProductTable products={products}/>
      </div>    
  )
}

export default ProductsPage;