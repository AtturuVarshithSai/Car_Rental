import { CAR_DATA } from "../components/CarData";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import PlanTrip from "../components/PlanTrip";
import AboutMain from "../images/about/about-main.jpg";
import background_image from "../images/hero/heroes-bg.png";

function About() {
  return (
    <>
      <section className="about-page">
        <HeroPages name="About" />
        <div className="container">
          <div className="about-main">
            <img
              className="about-main__img"
              src={background_image}
              alt="car-renting"
            />
            <div className="about-main__text">
              <h3>About DriveLocal</h3>
              <h2>A local rental brand built to feel clear, premium, and dependable</h2>
              <p>
                We are a small self-drive car rental business focused on doing
                the basics really well: clean cars, honest pricing, on-time
                pickups, and helpful support. Our aim is to give local travelers
                a much more modern and stress-free booking experience.
              </p>
              <div className="about-main__text__icons">
                <div className="about-main__text__icons__box">
                  {/* <span className="about-stat-icon">
                    <i className="fa-solid fa-car-side"></i>
                  </span> */}
                  <span>
                    <h4>{CAR_DATA.length}</h4>
                    <p>Core Cars</p>
                  </span>
                </div>
                <div className="about-main__text__icons__box">
                  {/* <span className="about-stat-icon"> */}
                    {/* <i className="fa-solid fa-location-dot"></i> */}
                  {/* </span> */}
                  <span>
                    <h4>5+</h4>
                    <p>Pickup Points</p>
                  </span>
                </div>
                <div className="about-main__text__icons__box">
                  {/* <span className="about-stat-icon">
                    <i className="fa-solid fa-headset"></i>
                  </span> */}
                  <span>
                    <h4>24/7</h4>
                    <p>Support</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <PlanTrip />
        </div>
      </section>
      <div className="book-banner">
        <div className="book-banner__overlay"></div>
        <div className="container">
          <div className="text-content">
            <h2>Have a trip coming up? We will help you choose the right car.</h2>
            <span>
              <i className="fa-solid fa-phone"></i>
              <h3>+91 98765 43210</h3>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
