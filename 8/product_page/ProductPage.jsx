import "./styleProd.css";
import Footer from "../components/parts_site/footer.jsx";
import Subscribe from "../components/parts_site/subscribe.jsx";
import Header from "../components/parts_site/header.jsx";
import foto_1 from "../components/picture/section_3_man_1-3.svg";
import foto_2 from "../components/picture/section_3_girl_2-3.svg";
import foto_3 from "../components/picture/section_3_man_2-1.svg";
import main from "../components/picture/girl_main_product.svg";
import { Link } from "react-router-dom";




export default function Product() {
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
        <section class="bannerProd ">
          <div class="bannerProd__img">
            <img src={main} alt="man"/>
            </div>
          <div class="bannerProd__btn ">
            <button class="bannerProd__btn_point">
              <svg width="13" height="23" viewBox="0 0 13 23" fill="black" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.6998 3.7499L4.9498 11.4999L12.6998 19.2499L11.1498 22.3499L0.299805 11.4999L11.1498 0.649902L12.6998 3.7499Z" />
                </svg>
            </button>
            <button class="bannerProd__btn_point">
              <svg width="13" height="23" viewBox="0 0 13 23" fill="black" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.299805 19.2499L8.0498 11.4999L0.299805 3.7499L1.8498 0.649902L12.6998 11.4999L1.8498 22.3499L0.299805 19.2499Z"/>
                </svg>
            </button>
          </div>
        </section>
      </div>
      <main>
        <section class="container offerProd_card">
          <div class="main_card">
            <div class="offerProd">
              <div class="offerProd__title">WOMEN COLLECTION</div>
              <div class="offerProd__line"></div>
              <div class="offerProd__text">
                <h3>MOSCHINO CHEAP AND CHIC</h3>
                <p class="offerProd__desrpt">Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.</p>
                <h4 class="offerProd__price">$561</h4>
              </div>
              <div class="offerProd__sort">
                <details>
                  <summary class="offerProd__summary"><span class="offerProd__summary_text">CHOOSE COLOR</span> <svg width="11" height="6" viewBox="0 0 11 6" fill="#6F6E6E" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.00214 5.64846C4.83521 5.64879 4.67343 5.59016 4.54488 5.48275L0.258102 1.88021C0.112196 1.75791 0.0204417 1.58217 0.00302325 1.39165C-0.0143952 1.20112 0.0439493 1.01143 0.165221 0.864289C0.286493 0.717149 0.460759 0.624619 0.649682 0.607053C0.838605 0.589487 1.02671 0.648325 1.17262 0.770623L5.00214 3.9985L8.83167 0.885905C8.90475 0.826055 8.98884 0.781361 9.0791 0.754391C9.16937 0.727421 9.26403 0.718707 9.35764 0.72875C9.45126 0.738794 9.54198 0.767396 9.6246 0.812913C9.70722 0.85843 9.7801 0.919965 9.83906 0.993981C9.90449 1.06806 9.95405 1.15498 9.98462 1.24927C10.0152 1.34357 10.0261 1.44321 10.0167 1.54197C10.0073 1.64073 9.97784 1.73646 9.93005 1.82318C9.88227 1.9099 9.81723 1.98573 9.73904 2.04592L5.45225 5.52598C5.32002 5.61641 5.16154 5.65954 5.00214 5.64846Z"/>
                    </svg>
                  </summary>
                </details>
                <details>
                  <summary class="offerProd__summary"><span class="offerProd__summary_text">CHOOSE SIZE</span> <svg width="11" height="6" viewBox="0 0 11 6" fill="#6F6E6E" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.00214 5.64846C4.83521 5.64879 4.67343 5.59016 4.54488 5.48275L0.258102 1.88021C0.112196 1.75791 0.0204417 1.58217 0.00302325 1.39165C-0.0143952 1.20112 0.0439493 1.01143 0.165221 0.864289C0.286493 0.717149 0.460759 0.624619 0.649682 0.607053C0.838605 0.589487 1.02671 0.648325 1.17262 0.770623L5.00214 3.9985L8.83167 0.885905C8.90475 0.826055 8.98884 0.781361 9.0791 0.754391C9.16937 0.727421 9.26403 0.718707 9.35764 0.72875C9.45126 0.738794 9.54198 0.767396 9.6246 0.812913C9.70722 0.85843 9.7801 0.919965 9.83906 0.993981C9.90449 1.06806 9.95405 1.15498 9.98462 1.24927C10.0152 1.34357 10.0261 1.44321 10.0167 1.54197C10.0073 1.64073 9.97784 1.73646 9.93005 1.82318C9.88227 1.9099 9.81723 1.98573 9.73904 2.04592L5.45225 5.52598C5.32002 5.61641 5.16154 5.65954 5.00214 5.64846Z"/>
                    </svg>
                  </summary>
                </details>
                <details>
                  <summary class="offerProd__summary"><span class="offerProd__summary_text">QUANTITY</span> <svg width="11" height="6" viewBox="0 0 11 6" fill="#6F6E6E" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.00214 5.64846C4.83521 5.64879 4.67343 5.59016 4.54488 5.48275L0.258102 1.88021C0.112196 1.75791 0.0204417 1.58217 0.00302325 1.39165C-0.0143952 1.20112 0.0439493 1.01143 0.165221 0.864289C0.286493 0.717149 0.460759 0.624619 0.649682 0.607053C0.838605 0.589487 1.02671 0.648325 1.17262 0.770623L5.00214 3.9985L8.83167 0.885905C8.90475 0.826055 8.98884 0.781361 9.0791 0.754391C9.16937 0.727421 9.26403 0.718707 9.35764 0.72875C9.45126 0.738794 9.54198 0.767396 9.6246 0.812913C9.70722 0.85843 9.7801 0.919965 9.83906 0.993981C9.90449 1.06806 9.95405 1.15498 9.98462 1.24927C10.0152 1.34357 10.0261 1.44321 10.0167 1.54197C10.0073 1.64073 9.97784 1.73646 9.93005 1.82318C9.88227 1.9099 9.81723 1.98573 9.73904 2.04592L5.45225 5.52598C5.32002 5.61641 5.16154 5.65954 5.00214 5.64846Z"/>
                    </svg>
                  </summary>
                </details>
              </div>
              <button class="offerProd__btn">
                <svg width="27" height="25" viewBox="0 0 27 25" fill="#F16D7F" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.49847 22.185C5.50635 21.752 5.64091 21.3309 5.88519 20.9748C6.12947 20.6186 6.47261 20.3431 6.87158 20.1828C7.27055 20.0226 7.7076 19.9848 8.12781 20.0741C8.54802 20.1635 8.93269 20.376 9.23358 20.685C9.53447 20.994 9.73817 21.3857 9.81909 21.811C9.90002 22.2363 9.85453 22.6763 9.68842 23.0756C9.52231 23.475 9.24296 23.8161 8.88538 24.0559C8.52779 24.2957 8.10791 24.4237 7.67847 24.4237C7.38955 24.4211 7.10399 24.3611 6.83807 24.2472C6.57216 24.1333 6.3311 23.9676 6.12866 23.7597C5.92623 23.5518 5.76639 23.3057 5.65826 23.0355C5.55013 22.7653 5.49584 22.4763 5.49847 22.185ZM21.3045 24.4237C20.8711 24.4303 20.4453 24.3087 20.0797 24.074C19.7141 23.8393 19.4247 23.5017 19.2471 23.103C19.0696 22.7042 19.0117 22.2618 19.0806 21.8303C19.1496 21.3988 19.3423 20.9971 19.6351 20.6748C19.9278 20.3524 20.3077 20.1236 20.728 20.0165C21.1482 19.9095 21.5903 19.929 21.9997 20.0724C22.4091 20.2159 22.7679 20.4771 23.0317 20.8238C23.2956 21.1706 23.453 21.5877 23.4845 22.0236C23.5269 22.6155 23.3369 23.2004 22.9555 23.6523C22.7706 23.8745 22.5436 24.0574 22.2877 24.1901C22.0319 24.3227 21.7524 24.4025 21.4655 24.4247L21.3045 24.4237ZM8.59351 17.4855C8.38116 17.4851 8.17488 17.414 8.00671 17.2833C7.83855 17.1525 7.71792 16.9694 7.66351 16.7624L3.73651 2.19527H0.978516C0.719001 2.19527 0.470064 2.09128 0.28656 1.90622C0.103056 1.72116 0 1.47018 0 1.20847C0 0.946764 0.103056 0.695782 0.28656 0.510726C0.470064 0.325669 0.719001 0.22168 0.978516 0.22168H4.45752C4.66982 0.222254 4.876 0.293463 5.04413 0.424184C5.21226 0.554905 5.33295 0.737883 5.38751 0.944787L9.31451 15.5119H20.0185L23.5765 7.12665H11.7185C11.459 7.12665 11.2101 7.02266 11.0266 6.83761C10.8431 6.65255 10.74 6.40157 10.74 6.13986C10.74 5.87815 10.8431 5.62717 11.0266 5.44211C11.2101 5.25705 11.459 5.15306 11.7185 5.15306H25.0535C25.2131 5.15352 25.3701 5.19451 25.5099 5.27223C25.6497 5.34995 25.7679 5.46195 25.8535 5.59784C25.9413 5.73569 25.9945 5.89303 26.0084 6.05627C26.0224 6.21951 25.9966 6.38368 25.9335 6.53465L21.5425 16.8935C21.469 17.0684 21.3462 17.2177 21.1895 17.3229C21.0327 17.4281 20.8488 17.4846 20.6605 17.4855H8.59351Z"/>
                  </svg>
                Add to Cart
              </button>
            </div>
          </div>
        </section>
        <section class="container advertisement">
          <div class="cardListProd">
            <div class="card">
              <div class="card__pict">
                <img src={foto_3} alt="man"/>
              </div>
              <div class="card__text">
                <h3>ELLERY X M'O CAPSULE</h3>
                <p>Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.
                </p>
                <h4>$52.00</h4>
              </div>
            </div>
            <div class="card cardNoneMobile">
              <div class="card__pict">
                <img src={foto_1} alt="man"/>
              </div>
              <div class="card__text">
                <h3>ELLERY X M'O CAPSULE</h3>
                <p>Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.
                </p>
                <h4>$52.00</h4>
              </div>
            </div>
            <div class="card cardNone">
              <div class="card__pict">
                <img src={foto_2} alt="girl"/>
              </div>
              <div class="card__text">
                <h3>ELLERY X M'O CAPSULE</h3>
                <p>Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.
                </p>
                <h4>$52.00</h4>
              </div>
            </div>
          </div>
        </section>
        <Subscribe />
      </main>
      <Footer />
    
  </>
  );
  };