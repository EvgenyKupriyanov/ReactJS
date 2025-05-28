import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import "../App.css";
import { addProduct  } from "../slice/productSlice.js";



export default function AddProduct() {
  const dispatch = useDispatch();
  const [newName, setNewName] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newPrice, setNewPrice] = useState(null);
  const [newAvailable, setNewAvailable] = useState(true);
  const handleAddProduct = () => {
    dispatch(addProduct({
      name: newName,
      description: newDescription,
      price: newPrice,
      available: newAvailable
    }))
    


    setNewName("");
    setNewDescription("");
    setNewPrice(null);
    setNewAvailable(true);
  };

  return (
    <>
      <h2>Добавить новый товар</h2>
      <div className="listItem">
        <label htmlFor="name">Name </label>
        <input type="text" name="name" id="name" value={newName} onChange={(e) => setNewName(e.target.value)}/>
        <label htmlFor="description">Description </label>
        <input type="text" name="description" id="description" value={newDescription} onChange={(e) => setNewDescription(e.target.value)}/>
        <label htmlFor="price">Price </label>
        <input type="number" name="price" id="price" value={newPrice} onChange={(e) => setNewPrice(Number(e.target.value))}/>
        <label htmlFor="available">Available </label>
        <select name="available" id="available" value={newAvailable} onChange={(e) => setNewAvailable(e.target.value)}>
          <option value="true">Да</option>
          <option value="false">Нет</option>
        </select>
        <button className='btn' onClick={handleAddProduct}>Add new</button>
      </div>
      
    </>
  );
}