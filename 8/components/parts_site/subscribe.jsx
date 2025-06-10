
import foto from "../picture/foto.svg";

export default function Subscribe() {
  return(
    <section className="subscribe">
      <div className="subscribe__back">
        <div className="subscribe__list">
          <div className="subscribe__text">
            <img src={foto} alt="foto"/>
            <h2>“Vestibulum quis porttitor dui! Quisque viverra nunc mi, <span className="subscribe__text__1">a pulvinar purus condimentum“</span> </h2>
          </div>
          <div className="subscribe__form">
            <h2>SUBSCRIBE</h2>
            <p className="subscribe__form__1">FOR OUR NEWLETTER AND PROMOTION</p>
            <form action="#" method="get" class="subscribe__form__btn">
              <input type="text" name="Email" placeholder="Enter Your Email"  className="subscribe__form__input" id="Email"/>
              <button className="subscribe__btn">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};