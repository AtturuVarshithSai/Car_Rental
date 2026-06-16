function ChooseUs() {
  const features = [
    {
      icon: "fa-solid fa-shield-heart",
      title: "Well Maintained Cars",
      text: "Every car is cleaned, inspected, and road-trip ready before handover.",
    },
    {
      icon: "fa-solid fa-indian-rupee-sign",
      title: "Affordable Prices",
      text: "Simple daily pricing with no confusing premium add-ons.",
    },
    {
      icon: "fa-solid fa-bolt",
      title: "Easy Booking",
      text: "Short forms, quick confirmations, and a smooth pickup experience.",
    },
    {
      icon: "fa-solid fa-headset",
      title: "24/7 Support",
      text: "Reach us anytime for trip questions, changes, or urgent help.",
    },
    {
      icon: "fa-solid fa-route",
      title: "Flexible Plans",
      text: "Great for airport runs, weekend trips, city travel, and family plans.",
    },
  ];

  return (
    <>
      <section className="choose-section">
        <div className="container">
          <div className="choose-container">
            <div className="text-container choose-grid">
              <div className="text-container__left choose-intro">
                <h4>Why Choose Us</h4>
                <h2>Local rentals with startup-level polish and dependable service</h2>
                <p>
                  We keep the experience simple: clean cars, fair pricing, clear
                  communication, and a booking process that feels premium from
                  first click to final drop-off.
                </p>
              </div>
              <div className="text-container__right choose-features">
                {features.map((feature) => (
                  <div key={feature.title} className="text-container__right__box">
                    {/* <span className="choose-icon">
                      <i className={feature.icon}></i>
                    </span> */}
                    <div className="text-container__right__box__text">
                      <h4>{feature.title}</h4>
                      <p>{feature.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChooseUs;
