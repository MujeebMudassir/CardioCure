import React from "react";
import Line from "./Line";
import { Link } from "react-router-dom";

const CardiologistInfo = () => {
  return (
    <section className="cardiologist center">
      <div className="section-heading">
        <h1>Meet Our Cardiologists</h1>
        <Line></Line>
      </div>
      <p style={{ marginTop: "2rem", letterSpacing: "1px" }}>
        Our Cardiologists are unlike any other doctors you've ever met because
        they have unique approaches to family medicine. Our doctors come from
        different cultural backgrounds (the American South and West Africa),
        treat patients as the unique individuals they are, and focus on
        preventing illness.
      </p>

      <div>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="doctor1 doctor">
                <Link
                  to={"/ahmed"}
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <img
                    src="./src/assets/doctors/doctor1.webp"
                    className="img-fluid"
                    alt="..."
                  ></img>

                  <p>Dr.Ahmed Khan</p>
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="doctor2 doctor">
                <Link
                  to={"/vivek"}
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <img
                    src="https://www.kauveryhospital.com/doctorimage/recent/Dr-Suresh-Kumar-B2022-06-08-10:25:52am.jpg"
                    className="img-fluid"
                    alt="..."
                  ></img>
                  <p>Dr.Vivek Kumar</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardiologistInfo;
