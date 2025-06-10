import './partStyle.css'

export default function Offer() {
  return(
    <section className="container offer">
      <div className="offer__main_card">
        <div className="offer__bgr-1">
          <div className="offer__background">
            <div className="offer__text">
              <h2>30% OFF</h2>
              <h3>FOR WOMEN</h3>
            </div>
          </div>
        </div>
        <div className="offer__bgr-2">
          <div className="offer__background">
            <div className="offer__text">
              <h2>HOT DEAL</h2>
              <h3>FOR MEN</h3>
            </div>
          </div>
        </div>
        <div className="offer__bgr-3">
          <div className="offer__background">
            <div className="offer__text">
              <h2>NEW ARRIVALS</h2>
              <h3>FOR KIDS</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="offer__main_card-big">
        <div className="offer__background">
          <div className="offer__text">
            <h2>LUXIROUS & TRENDY</h2>
            <h3>ACCESORIES</h3>
          </div>
        </div>
      </div>
    </section>
  );
};
