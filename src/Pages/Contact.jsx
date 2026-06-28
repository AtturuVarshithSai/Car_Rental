import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";

function Contact() {
  return (
    <>
      <section className="contact-page">
        <HeroPages name="Contact" />
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text">
              <h2>Need help before you book?</h2>
              <p>
                Reach out for car availability, pickup options, airport
                bookings, or pricing details. We will help you plan the right
                ride.
              </p>
              <a href="tel:+919876543210">
                <i className="fa-solid fa-phone"></i>&nbsp; +91 98765 43210
              </a>
              <a href="mailto:hello@drivelocal.in">
                <i className="fa-solid fa-envelope"></i>&nbsp;
                hello@drivelocal.in
              </a>
              <a href="https://wa.me/919876543210">
                <i className="fa-solid fa-location-dot"></i>&nbsp; Bengaluru,
                Karnataka
              </a>
            </div>
            <div className="contact-div__form">
              <form>
                <label>
                  Full Name <b>*</b>
                </label>
                <input type="text" placeholder='E.g: "Varshith Sai"'></input>

                <label>
                  Email <b>*</b>
                </label>
                <input type="email" placeholder="youremail@example.com"></input>

                <label>
                  Tell us about your trip <b>*</b>
                </label>
                <textarea placeholder="Pickup city, dates, and preferred car"></textarea>

                <button type="submit">
                  <i className="fa-solid fa-envelope-open-text"></i>&nbsp; Send
                  Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Talk to us and get your booking sorted quickly</h2>
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

export default Contact;
