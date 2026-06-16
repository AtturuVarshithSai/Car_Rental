import { useState } from "react";
import CarBox from "./CarBox";
import { CAR_DATA } from "./CarData";

function PickCar() {
  const [active, setActive] = useState(0);

  const fleet = CAR_DATA;

  return (
    <>
      <section id="fleet" className="pick-section">
        <div className="container">
          <div className="pick-container">
            <div className="pick-container__title">
              <h3>Our Cars</h3>
              <h2>Three dependable self-drive options for city rides and family trips</h2>
              <p>
                Carefully maintained hatchbacks and MPVs with transparent
                pricing, flexible pickup, and a smooth local rental experience.
              </p>
            </div>
            <div className="pick-container__car-content">
              <div className="pick-box">
                {fleet.map((car, index) => (
                  <button
                    key={car.name}
                    className={active === index ? "colored-button" : ""}
                    onClick={() => setActive(index)}
                  >
                    {car.name}
                  </button>
                ))}
              </div>

              <CarBox data={fleet} carID={active} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PickCar;
