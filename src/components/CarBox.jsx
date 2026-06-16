import { useState } from "react";

function CarBox({ data, carID }) {
  const [carLoad, setCarLoad] = useState(true);
  const car = data[carID];

  return (
    <>
      <div className="box-cars">
        <div className="pick-car">
          {carLoad && <span className="loader"></span>}
          <img
            style={{ display: carLoad ? "none" : "block" }}
            src={car.img}
            alt={car.name}
            onLoad={() => setCarLoad(false)}
          />
        </div>
        <div className="pick-description">
          <div className="pick-description__header">
            <div>
              <p className="pick-description__eyebrow">Popular choice</p>
              <h3>{car.name}</h3>
            </div>
            <div className="pick-description__price">
              <span>Rs. {car.price}</span>
              <small>per day</small>
            </div>
          </div>

          <div className="pick-description__table">
            <div className="pick-description__table__col">
              <span>Brand</span>
              <span>{car.mark}</span>
            </div>

            <div className="pick-description__table__col">
              <span>Model</span>
              <span>{car.model}</span>
            </div>

            <div className="pick-description__table__col">
              <span>Seating</span>
              <span>{car.seats}</span>
            </div>

            <div className="pick-description__table__col">
              <span>Transmission</span>
              <span>{car.transmission}</span>
            </div>

            <div className="pick-description__table__col">
              <span>Fuel</span>
              <span>{car.fuel}</span>
            </div>

            <div className="pick-description__table__col">
              <span>AC</span>
              <span>{car.air}</span>
            </div>

            <div className="pick-description__table__col">
              <span>Year</span>
              <span>{car.year}</span>
            </div>
          </div>

          <div className="pick-description__footer">
            <p>Perfect for airport pickups, weekend drives, and local travel.</p>
            <a className="cta-btn" href="#booking-section">
              Book Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default CarBox;
