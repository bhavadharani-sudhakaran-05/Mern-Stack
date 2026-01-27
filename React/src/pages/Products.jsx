import React from 'react'
import {Link} from 'react-router-dom';
const Products = () => {
   const products=[
    {id:1,name:"Laptop",price:50000},
    {id:2,name:"Mobile",price:20000},
    {id:3,name:"Tablet",price:30000},
    {id:4,name:"Monitor",price:15000},
   ];

  return (
    <div>
        <h1>Products</h1>
        {products.map((product)=>(
            <div key={product.id}>
                <h2>{product.name}</h2>
                <h3>{product.price}</h3>
                <Link to ={`/products/${product.id}`}>View Details</Link>
            </div>
        ))}
    </div>
  )
}

export default Products