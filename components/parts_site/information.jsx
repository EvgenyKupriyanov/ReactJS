import './partStyle.css'
import car from "../picture/car.png";
import persent from "../picture/pers.png";
import crown from "../picture/crown.png";

export default function Information() {
  return(
    <section className="container_large">
      <div className="container">
        <div className="information">
          <div className="information__card">
            <img src={car} alt="car"/>
            <div className="information__card_text">
              <h2>Free Delivery</h2>
              <p>Worldwide delivery on all. Authorit tively morph<br/>next-generation innov tion with extensive models.</p>
            </div>

          </div>
          <div className="information__card">
            <img src={persent} alt="persent"/>
            <div className="information__card_text">
              <h2>Sales & discounts</h2>
              <p>Worldwide delivery on all. Authorit tively morph<br/>next-generation innov tion with extensive models.</p>
           </div>
          </div>
         <div className="information__card">
            <img src={crown} alt="crown"/>
            <div className="information__card_text">
              <h2>Quality assurance</h2>
              <p>Worldwide delivery on all. Authorit tively morph<br/> next-generation innov tion with extensive models.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
