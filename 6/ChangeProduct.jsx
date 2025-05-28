import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import "../App.css";
import { addProduct, changeProduct } from "../slice/productSlice.js";



export default function ChangeProducts({prodId}) {
  const products = useSelector((state) => state.product);
  const dispatch = useDispatch();
    const [newName, setNewName] = useState("");
    const [newDescription, setNewDescription] = useState("");
    const [newPrice, setNewPrice] = useState(null);
    console.log(prodId);

  const handleChangeProduct = () => {
    dispatch(changeProduct({
      id: prodId,
      name: newName,
      description: newDescription,
      price: newPrice,
    }));  
      setNewName("");
      setNewDescription("");
      setNewPrice(null);
    };

  return (
    <>
      <h2>Изменить товар</h2>
      <label htmlFor="name">Name </label>
      <input type="text" name="name" id="name" value={newName} onChange={(e) => setNewName(e.target.value)}/>
      <label htmlFor="description">Description </label>
      <input type="text" name="description" id="description" value={newDescription} onChange={(e) => setNewDescription(e.target.value)}/>
      <label htmlFor="price">Price </label>
      <input type="number" name="price" id="price" value={newPrice} onChange={(e) => setNewPrice(Number(e.target.value))}/>

      <button className='btn' onClick={()=> {handleChangeProduct();
        document.getElementsByClassName('changeProd')[0].style.display = "none";
        document.getElementsByClassName('addProd')[0].style.display = "flex"
      }}>Save</button>
    </>
  );
}
