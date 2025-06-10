import "./styleCart.css";
import Footer from "../components/parts_site/footer.jsx";
import Subscribe from "../components/parts_site/subscribe.jsx";
import Header from "../components/parts_site/header.jsx";
import Goods_cart from "../components/parts_site/goods_cart.jsx";
import { useSelector, useDispatch } from 'react-redux';


export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const sum = cart.reduce((sum, prod) => sum + prod.count * prod.price, 0);
    

  return (
    <>
    <div className="top">
      <Header/>
      <section className="heading ">
        <div className="heading__content container">
          <div className="heading__content_title">
          <h2>SHOPPING CART</h2>
          </div>
        </div>
      </section>
      <section className="container list">
        <div className="cart">
          {cart.map((good) => (<Goods_cart key={good.id} id={good.goodId} foto={good.url_foto} name={good.name} price={good.price} color={good.color} size={good.size} count={good.count}/>))}
          
          <div className="cart__btn">
            <button className="cart__btn_clear">CLEAR SHOPPING CART</button>
            <button className="cart__btn_cont">CONTINUE SHOPPING</button>
          </div>
        </div>
        <div className="bill">
          <form className="bill__info">
            <h2>SHIPPING ADRESS</h2>
            <input type="text" name="City" placeholder="Bangladesh" id="City" className="bill__info_inputExampl"/>
            <input type="text" name="State" placeholder="State" id="State" className="bill__info_input"/>
            <input type="text" name="Postcode" placeholder="Postcode / Zip" id="Postcode" className="bill__info_input"/>
            <button className="bill__info_btn">GET A QUOTE</button>
          </form>
          <div className="bill__total">
            <div className="bill__total_price">
              <h3>SUB TOTAL&emsp;${sum}</h3>
              <h2>GRAND TOTAL&emsp;<span className="bill__total_price-fnl">${sum}</span></h2>
            </div>
            <div className="bill__total_line"></div>
            <button className="bill__total_btn">PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </section>
    </div>
    <Subscribe />
    <Footer />
  </>
  );
  };