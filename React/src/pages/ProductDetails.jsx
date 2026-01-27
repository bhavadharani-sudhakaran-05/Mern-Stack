import React from 'react'
import { useParams } from 'react-router-dom'; 
const ProductDetails = () => {

     const products=[
    {id:1,name:"Laptop",price:50000,description:"A high performance laptop suitable for all your computing needs."},
    {id:2,name:"Mobile",price:20000,description:"A sleek and powerful smartphone with the latest features."},
    {id:3,name:"Tablet",price:30000,description:"A versatile tablet perfect for work and entertainment on the go."},
    {id:4,name:"Monitor",price:15000,description:"A high-resolution monitor for clear and vibrant visuals."},
   ];

   const {id}=useParams()
   const product=products.find((p)=>p.id===Number(id));
   
  return (
    <div>
        <h1>ProductDetails</h1>
        <h2>{product.name}</h2>
        <h3>{product.price}</h3>
        <p>{product.description}</p>
        </div>
  )
}

export default ProductDetails