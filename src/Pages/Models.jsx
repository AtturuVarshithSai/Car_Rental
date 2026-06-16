import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import { CAR_DATA } from "../components/CarData";
import { Link } from "react-router-dom";

function Models() {
  return (
    <>
      <section className="models-section">
        <HeroPages name="Our Cars" />
        <div className="container">
          <div className="models-div">
            {CAR_DATA.map((car) => (
              <div key={car.name} className="models-div__box">
                <div className="models-div__box__img">
                  <img src={car.img} alt={car.name} />
                  <div className="models-div__box__descr">
                    <div className="models-div__box__descr__name-price">
                      <div className="models-div__box__descr__name-price__name">
                        <p>{car.name}</p>
                        <span>
                          <i className="fa-solid fa-user-group"></i>&nbsp; {car.seats}
                        </span>
                      </div>
                      <div className="models-div__box__descr__name-price__price">
                        <h4>Rs. {car.price}</h4>
                        <p>per day</p>
                      </div>
                    </div>
                    <div className="models-div__box__descr__name-price__details">
                      <span>
                        <i className="fa-solid fa-car-side"></i> &nbsp; {car.transmission}
                      </span>
                      <span style={{ textAlign: "right" }}>
                        {car.fuel} &nbsp; <i className="fa-solid fa-gas-pump"></i>
                      </span>
                      <span>
                        <i className="fa-solid fa-snowflake"></i> &nbsp; AC
                      </span>
                      <span style={{ textAlign: "right" }}>
                        {car.year} &nbsp; <i className="fa-solid fa-calendar"></i>
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__btn">
                      <Link onClick={() => window.scrollTo(0, 0)} to="/#booking-section">
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Choose your car and lock in your trip today</h2>
              <span>
                <i className="fa-solid fa-phone"></i>
                <h3>+91 98765 43210</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Models;
