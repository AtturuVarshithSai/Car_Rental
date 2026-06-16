import { MapPin, CarFront, KeyRound } from "lucide-react";
function PlanTrip() {
  return (
    <>
      <section id="how-it-works" className="plan-section">
        <div className="container">
          <div className="plan-container">
            <div className="plan-container__title">
              <h3>How It Works</h3>
              <h2>Booking your next drive is simple and transparent</h2>
              <p>
                A quick three-step process designed for local travelers who want
                reliable cars without the usual rental friction.
              </p>
            </div>

            <div className="plan-container__boxes">
              <div className="plan-container__boxes__box">
                <span className="plan-icon">
                  <MapPin size={40} color="#2563eb" strokeWidth={2.2}/>
                </span>
                <h3>Choose Location</h3>
                <p>
                  Pick your preferred pickup point, rental dates, and travel
                  plan in under a minute.
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <span className="plan-icon">
                  <CarFront size={40} color="#2563eb" strokeWidth={2.2}/>
                </span>
                <h3>Choose Car</h3>
                <p>
                  Compare the cars based on comfort, seating,
                  and price per day.
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <span className="plan-icon">
                  <KeyRound size={40} color="#2563eb" strokeWidth={2.2}/>
                </span>
                <h3>Book & Drive</h3>
                <p>
                  Confirm your details, collect the keys, and head out with
                  support whenever you need it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PlanTrip;
