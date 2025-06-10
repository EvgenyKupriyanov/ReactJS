import './mainStyle.css';
import mainFoto from "../components/picture/main.svg";
import data from "../data/data.js";
import Goods_card from "../components/parts_site/goods_card.jsx";
import Footer from "../components/parts_site/footer.jsx";
import Subscribe from "../components/parts_site/subscribe.jsx";
import Header from "../components/parts_site/header.jsx";
import Offer from "../components/parts_site/offer.jsx";
import Information from "../components/parts_site/information.jsx";


export default function Main() {
  return (
    <>
    <div className="top">
      <Header/>
      <section className="banner">
          <div className="banner__img"><img src={mainFoto} alt="man"/></div>
          <div className="banner__title">
            <div className="banner__title_text">
              <h2>THE BRAND</h2>
              <h3>OF LUXERIOUS <span class="banner__title_1">FASHION</span></h3>
            </div>
          </div>
      </section>
    </div>
  <main>
    <Offer />
    <section className="container advertisement">
      <div className="advertisement__title">
        <h2>Fetured Items</h2>
        <p>Shop for items based on what we featured in this week</p>
      </div>
      <div className="cardList">
        {data.filter(good => good.id <= 5).map((good) => (<Goods_card foto={good.url_foto} name={good.name} describe={good.describe} price={good.price}/>))}
      </div>
      <div>
        <button className="cardList__btn">Browse All Product</button>
      </div>
    </section>
    <Information />
    <Subscribe />
  </main>
  <Footer />
  </>
  );
  };