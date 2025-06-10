import { Link, BrowserRouter as BrowserRouter, Router, Route, Routes } from "react-router-dom";
//import './App.css';

import Registartion from './registration_page/RegistrationPage.jsx';
import Cart from "./cart_page/CartPage.jsx";
import Product from "./product_page/ProductPage.jsx";
import Catalog from "./catalog_page/CatalogPage.jsx";
import Main from "./main_page/Main.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main/>}/>
        <Route path="/reg" element={<Registartion/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/catalog" element={<Catalog/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
