import './partStyle.css'
import basket from "../picture/basket.png";
import { addProduct } from "../../slice/cartSlice.js"
import { useDispatch, useSelector } from 'react-redux';



export default function Goods_card({ id, foto, name, describe, price, color, size }) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log("from card", cart)
  return (
    <div className="card">
      <div className="card__pict">
        <img src={foto} alt={name}/>
        <div className="card__hover">
          <button className="card__hover_btn" onClick={()=> dispatch(addProduct({ id, foto, name, price, color, size, color, size }))}><img src={basket} alt="basket" />Add to Cart</button>
        </div>
      </div>
      <div className="card__text">
        <h3>{name}</h3>
        <p>{describe}</p>
        <h4>$ {price.toFixed(2)}</h4>
      </div>
    </div>
  );
  };
 