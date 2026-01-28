import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);
  console.log(product)

  return (
    <div>
      <h1>Product Details</h1>
      <h2>{product.title}</h2>
      <h3>₹ {product.price}</h3>
      <p>{product.description}</p>
       <p>{product.category}</p>
     
    </div>
  );
};

export default ProductDetails;
