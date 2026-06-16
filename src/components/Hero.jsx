import { Link } from "react-router-dom";
import HeroCar from "../images/cars-big/ertiga.png";
import { useEffect, useState } from "react";
import { CAR_DATA } from "./CarData";

function Hero() {
  const [goUp, setGoUp] = useState(false);

  const [currentImage, setCurrentImage] = useState(0);

  const scrollToTop = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  const bookBtn = () => {
    document.querySelector("#fleet").scrollIntoView({ behavior: "smooth" });
  };

  const howItWorksBtn = () => {
    document
      .querySelector("#how-it-works")
      .scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.pageYOffset > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === CAR_DATA.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section id="home" className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-content__text">
              <span className="hero-badge">Trusted local self-drive rentals</span>
              <h1>Your Journey, Our Drive.</h1>
              <p>
                Affordable self-drive cars for every need. Safe, clean and
                ready when you are.
              </p>
              <div className="hero-content__text__btns">
                <Link
                  onClick={bookBtn}
                  className="hero-content__text__btns__book-ride"
                  to="/"
                >
                  Explore Cars
                </Link>
                <Link
                  onClick={howItWorksBtn}
                  className="hero-content__text__btns__learn-more"
                  to="/"
                >
                  How It Works
                </Link>
              </div>
              <div className="hero-stats">
                <div>
                  <strong>{CAR_DATA.length}</strong>
                  <span>Curated cars</span>
                </div>
                <div>
                  <strong>24/7</strong>
                  <span>Support</span>
                </div>
                <div>
                  <strong>100%</strong>
                  <span>Cleaned before pickup</span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-visual__blur hero-visual__blur--one"></div>
              <div className="hero-visual__blur hero-visual__blur--two"></div>
              <div className="hero-visual__card">
                <div className="hero-visual__card__tag">Featured family ride</div>
                <img
                  src={CAR_DATA[currentImage].img}
                  alt={CAR_DATA[currentImage].img}
                  className="hero-content__car-img"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          onClick={scrollToTop}
          className={`scroll-up ${goUp ? "show-scroll" : ""}`}
        >
          <i className="fa-solid fa-angle-up"></i>
        </div>
      </section>
    </>
  );
}

export default Hero;
