import { useDispatch, useSelector } from "react-redux";

import "../App.css";
import { availableProduct, changeProduct, deleteProduct } from "../slice/productSlice.js";
import ChangeProducts from "./ChangeProduct.jsx";
import AddProduct from "./AddProduct.jsx";



export default function ListProducts() {
  const products = useSelector((state) => state.product);
  const dispatch = useDispatch();
  console.log(products);

  return (
    <>
      <ul>
      <div className="addProd"><AddProduct/></div>
      
      <h2>Список товаров</h2>
      {products.map((product) => (
        <div key={product.id}>
          <li>Name: {product.name}</li>
          <li>Description: {product.description}</li>
          <li>Price: {product.price}</li>
          <li>Available: {product.available}        <div className="changeProd"><ChangeProducts prodId={product.id} /></div>
          <button className='btn' onClick={() => dispatch(availableProduct(product.id))
            }>Change available</button></li>
          <button className='btn' onClick={() => {document.getElementsByClassName('changeProd')[0].style.display = "flex";
          document.getElementsByClassName('addProd')[0].style.display = "none"
          }}>Change</button>
          <button className='btn' onClick={() => dispatch(deleteProduct(product.id))}>Delete</button>
        </div>
      ))}
      </ul>
    </>
  );
}

