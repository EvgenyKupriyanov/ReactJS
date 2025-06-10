import "./styleCat.css";
import data from "../data/data.js";
import Goods_card from "../components/parts_site/goods_card.jsx";
import Footer from "../components/parts_site/footer.jsx";
import Subscribe from "../components/parts_site/subscribe.jsx";
import Header from "../components/parts_site/header.jsx";
import Information from "../components/parts_site/information.jsx";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';


export default function Catalog() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log("from page", cart)
  const [selectedSizes, setSelectedSizes] = useState([]);

    // Функция включает / отключает размер
  const handleToggleSize = (size) => {
    if (selectedSizes.includes(size)) {
      setSelectedSizes(selectedSizes.filter(s => s !== size));
    } else {
      setSelectedSizes([...selectedSizes, size]);
    }
  };

  // Применяем фильтрацию
  const filteredData = selectedSizes.length > 0 ?
    data.filter(good => selectedSizes.includes(good.size))
    : data;
  return (
    <>
      <div className="top">
        <Header/>
        <section class="heading ">
          <div class="heading__content container">
            <div class="heading__title">
            <h2>NEW ARRIVALS</h2>
            </div>
            <div class="heading__nav">
              <div class="heading__box"><Link to="/main" class="heading__nav_link">HOME</Link></div>
              <div class="heading__box"><a href="#" class="heading__nav_link">MEN</a></div>
              <div class="heading__box"><a href="#" class="heading__nav_link">NEW ARRIVALS</a></div>
            </div>
          </div>
        </section>
        <section class="filter-sort ">

          <details class="filter">
            <summary class="filter__summary"><span class="filter__summary_text">FILTER</span> <svg width="15" height="10" viewBox="0 0 15 10" fill="black" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.833333 10H4.16667C4.625 10 5 9.625 5 9.16667C5 8.70833 4.625 8.33333 4.16667 8.33333H0.833333C0.375 8.33333 0 8.70833 0 9.16667C0 9.625 0.375 10 0.833333 10ZM0 0.833333C0 1.29167 0.375 1.66667 0.833333 1.66667H14.1667C14.625 1.66667 15 1.29167 15 0.833333C15 0.375 14.625 0 14.1667 0H0.833333C0.375 0 0 0.375 0 0.833333ZM0.833333 5.83333H9.16667C9.625 5.83333 10 5.45833 10 5C10 4.54167 9.625 4.16667 9.16667 4.16667H0.833333C0.375 4.16667 0 4.54167 0 5C0 5.45833 0.375 5.83333 0.833333 5.83333Z"/>
              </svg>
              </summary>
            <div class="filter__content">
              <details open class="filter__item">
                <summary class="filter__heading">CATEGORY</summary>
                <div class="filter__link-box">
                  <a href="#" class="filter__link">Accessories</a>
                  <a href="#" class="filter__link">Bags</a>
                  <a href="" class="filter__link">Denim</a>
                  <a href="#" class="filter__link">Hoodies & Sweatshirts</a>
                  <a href="#" class="filter__link">Jackets & Coats</a>
                  <a href="" class="filter__link">Polos</a>
                  <a href="#" class="filter__link">Shirts</a>
                  <a href="#" class="filter__link">Shoes</a>
                  <a href="#" class="filter__link">Sweaters & Knits</a>
                  <a href="#" class="filter__link">T-Shirts</a>
                  <a href="#" class="filter__link">Tanks</a>
                </div>
              </details>
              <details class="filter__item">
                <summary class="filter__heading">BRAND</summary>
                <div class="filter__link-box">
                  <a href="#" class="filter__link">Accessories</a>
                  <a href="#" class="filter__link">Bags</a>
                  <a href="" class="filter__link">Denim</a>
                  <a href="#" class="filter__link">Hoodies & Sweatshirts</a>
                  <a href="#" class="filter__link">Jackets & Coats</a>
                  <a href="" class="filter__link">Polos</a>
                  <a href="#" class="filter__link">Shirts</a>
                  <a href="#" class="filter__link">Shoes</a>
                  <a href="#" class="filter__link">Sweaters & Knits</a>
                  <a href="#" class="filter__link">T-Shirts</a>
                  <a href="#" class="filter__link">Tanks</a>
                </div>
              </details>
              <details class="filter__item">
                <summary class="filter__heading">DESIGNER</summary>
                <div class="filter__link-box">
                  <a href="#" class="filter__link">Accessories</a>
                  <a href="#" class="filter__link">Bags</a>
                  <a href="" class="filter__link">Denim</a>
                  <a href="#" class="filter__link">Hoodies & Sweatshirts</a>
                  <a href="#" class="filter__link">Jackets & Coats</a>
                  <a href="" class="filter__link">Polos</a>
                  <a href="#" class="filter__link">Shirts</a>
                  <a href="#" class="filter__link">Shoes</a>
                  <a href="#" class="filter__link">Sweaters & Knits</a>
                  <a href="#" class="filter__link">T-Shirts</a>
                  <a href="#" class="filter__link">Tanks</a>
                </div>
              </details>
            </div>
          </details>
          <div class="sort">
            <details class="sort__details">
              <summary class="sort__summary"><span class="sort__heading">TRENDING NOW<svg width="11" height="6" viewBox="0 0 11 6" fill="#6F6E6E" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.00214 5.64846C4.83521 5.64879 4.67343 5.59016 4.54488 5.48275L0.258102 1.88021C0.112196 1.75791 0.0204417 1.58217 0.00302325 1.39165C-0.0143952 1.20112 0.0439493 1.01143 0.165221 0.864289C0.286493 0.717149 0.460759 0.624619 0.649682 0.607053C0.838605 0.589487 1.02671 0.648325 1.17262 0.770623L5.00214 3.9985L8.83167 0.885905C8.90475 0.826055 8.98884 0.781361 9.0791 0.754391C9.16937 0.727421 9.26403 0.718707 9.35764 0.72875C9.45126 0.738794 9.54198 0.767396 9.6246 0.812913C9.70722 0.85843 9.7801 0.919965 9.83906 0.993981C9.90449 1.06806 9.95405 1.15498 9.98462 1.24927C10.0152 1.34357 10.0261 1.44321 10.0167 1.54197C10.0073 1.64073 9.97784 1.73646 9.93005 1.82318C9.88227 1.9099 9.81723 1.98573 9.73904 2.04592L5.45225 5.52598C5.32002 5.61641 5.16154 5.65954 5.00214 5.64846Z"/>
                  </svg></span>
              </summary>
            </details>
            <details class="sort__details">
              <summary class="sort__summary"><span class="sort__heading">SIZE<svg width="11" height="6" viewBox="0 0 11 6" fill="#6F6E6E" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.00214 5.64846C4.83521 5.64879 4.67343 5.59016 4.54488 5.48275L0.258102 1.88021C0.112196 1.75791 0.0204417 1.58217 0.00302325 1.39165C-0.0143952 1.20112 0.0439493 1.01143 0.165221 0.864289C0.286493 0.717149 0.460759 0.624619 0.649682 0.607053C0.838605 0.589487 1.02671 0.648325 1.17262 0.770623L5.00214 3.9985L8.83167 0.885905C8.90475 0.826055 8.98884 0.781361 9.0791 0.754391C9.16937 0.727421 9.26403 0.718707 9.35764 0.72875C9.45126 0.738794 9.54198 0.767396 9.6246 0.812913C9.70722 0.85843 9.7801 0.919965 9.83906 0.993981C9.90449 1.06806 9.95405 1.15498 9.98462 1.24927C10.0152 1.34357 10.0261 1.44321 10.0167 1.54197C10.0073 1.64073 9.97784 1.73646 9.93005 1.82318C9.88227 1.9099 9.81723 1.98573 9.73904 2.04592L5.45225 5.52598C5.32002 5.61641 5.16154 5.65954 5.00214 5.64846Z"/>
                  </svg></span>
              </summary>
              <div class="sort__box">
                <div class="sort__check">
                    <input id="sort__check1" type="checkbox" checked={selectedSizes.includes("XS")}
                      onChange={() => handleToggleSize("XS")}/><label for="sort__check1">XS</label>
                </div>
                <div class="sort__check">
                  <input id="sort__check2" type="checkbox" checked={selectedSizes.includes("S")}
                      onChange={() => handleToggleSize("S")}/><label for="sort__check2">S</label>
              </div>
              <div class="sort__check">
                <input id="sort__check3" type="checkbox" checked={selectedSizes.includes("M")}
                      onChange={() => handleToggleSize("M")}/><label for="sort__check3">M</label>
            </div>
            <div class="sort__check">
              <input id="sort__check4" type="checkbox" checked={selectedSizes.includes("L")}
                      onChange={() => handleToggleSize("L")}/><label for="sort__check4">L</label>
          </div>
              </div>
            </details>
            <details class="sort__details">
              <summary class="sort__summary"><span class="sort__heading">PRICE <svg width="11" height="6" viewBox="0 0 11 6" fill="#6F6E6E" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.00214 5.64846C4.83521 5.64879 4.67343 5.59016 4.54488 5.48275L0.258102 1.88021C0.112196 1.75791 0.0204417 1.58217 0.00302325 1.39165C-0.0143952 1.20112 0.0439493 1.01143 0.165221 0.864289C0.286493 0.717149 0.460759 0.624619 0.649682 0.607053C0.838605 0.589487 1.02671 0.648325 1.17262 0.770623L5.00214 3.9985L8.83167 0.885905C8.90475 0.826055 8.98884 0.781361 9.0791 0.754391C9.16937 0.727421 9.26403 0.718707 9.35764 0.72875C9.45126 0.738794 9.54198 0.767396 9.6246 0.812913C9.70722 0.85843 9.7801 0.919965 9.83906 0.993981C9.90449 1.06806 9.95405 1.15498 9.98462 1.24927C10.0152 1.34357 10.0261 1.44321 10.0167 1.54197C10.0073 1.64073 9.97784 1.73646 9.93005 1.82318C9.88227 1.9099 9.81723 1.98573 9.73904 2.04592L5.45225 5.52598C5.32002 5.61641 5.16154 5.65954 5.00214 5.64846Z"/>
                  </svg></span>
              </summary>
            </details>
          </div>
        </section>
        <section class="container catalog">
          <div class="cardList">
            {filteredData.map((good) => (<Goods_card key={good.id} id={good.id} foto={good.url_foto} name={good.name} describe={good.describe} price={good.price} color={good.color} size={good.size}/>))}
            </div>
          
        </section>
        <section class="page">
          <div class="page__list">
            <svg width="13" height="23" viewBox="0 0 13 23" fill="black" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.6998 3.7499L4.9498 11.4999L12.6998 19.2499L11.1498 22.3499L0.299805 11.4999L11.1498 0.649902L12.6998 3.7499Z"/>
            </svg>
            <a href="#" class="page__active">1</a>
            <a href="#" class="page__number">2</a>
            <a href="#" class="page__number">3</a>
            <a href="#" class="page__number">4</a>
            <a href="#" class="page__number">5</a>
            <a href="#" class="page__number">6</a>
            <a href="#" class="page__number">.....</a>
            <a href="#" class="page__number">20</a>
            <svg width="13" height="23" viewBox="0 0 13 23" fill="black" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.299805 19.2499L8.0498 11.4999L0.299805 3.7499L1.8498 0.649902L12.6998 11.4999L1.8498 22.3499L0.299805 19.2499Z"/>
              </svg>
          </div>
        </section>
      </div>
    <Information />
    <Subscribe />
    <Footer />    
  </>
  );
  };