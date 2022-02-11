import { useState } from 'react';
import jsonData from './../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  const [search, setSearch] = useState();

  const onChangeInput=(e)=>{
    console.log(e);
    const currentInput=e.currentTarget;
    const currentName=currentInput.value;
    //DOM
    const nameRegex=new RegExp(`${currentName.toLowerCase()}`);
    setSearch(currentName);
    if(currentName===""){
      setProducts([...jsonData]);
      return;
    }
    console.log(currentName);
    const result=products.filter((product)=>{
      return nameRegex.test(product.name.toLowerCase());
    });
    
    setProducts([...result]);
  }
  const onChangeCheck=(e)=>{
    const currentInput=e.currentTarget;
    const currentCheck=currentInput.checked;
    let result=jsonData;

    if(search){
      const nameRegex=new RegExp(`${search.toLowerCase()}`);
      result=jsonData.filter((product)=>{
        return nameRegex.test(product.name.toLowerCase());
      });
    }

    if(currentCheck){
      result=products.filter((product)=>product.inStock);
    }
    
    setProducts([...result]);
  }


  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar onChangeInput={onChangeInput} onChangeCheck={onChangeCheck}/>
        <ProductTable products={products}/>
      </div>    
  )
}

export default ProductsPage;