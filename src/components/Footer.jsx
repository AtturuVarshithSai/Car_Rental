import {FaWhatsapp,FaInstagram,FaFacebook,FaLinkedin,FaYoutube,FaPhone} from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li>
                <span>DRIVE</span>LOCAL
              </li>
              <li>
                Clean, affordable self-drive rentals for local travel, airport
                pickups, and weekend plans.
              </li>
              <li>
                <a href="tel:+919876543210">
                  <i className="fa-solid fa-phone"></i> &nbsp; +91 98765 43210
                </a>
              </li>

              <li>
                <a href="mailto:hello@drivelocal.in">
                  <i className="fa-solid fa-envelope"></i>
                  &nbsp; hello@drivelocal.in
                </a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Quick Links</li>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/#fleet">Our Cars</a>
              </li>
              <li>
                <a href="/#how-it-works">How It Works</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Available Cars</li>
              <li>Maruti Ertiga</li>
              <li>Maruti Baleno</li>
              <li>Maruti Swift</li>
              <li>Daily rentals available</li>
            </ul>

            <ul className="footer-content__2">
              <li>Contact</li>
              <li>
                <p>48 Residency Road, Bengaluru, Karnataka</p>
              </li>
              <li>
                <div className="footer-socials">
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp size={40} color="#2563eb"/>
                  </a>
                  <a href="tel:+919876543210">
                    <FaPhone size={30} color="#2563eb"/>
                  </a>
                  <a href="https://instagram.com/drivelocal" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={40} color="#2563eb"/>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
