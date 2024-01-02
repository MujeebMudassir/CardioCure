import React from "react";
import { Link } from "react-router-dom";
import Line from "./Line";

const Accordian = () => {
  return (
    <section className="accordian center">
      <h1 style={{ marginTop: "3rem", textAlign: "center" }}>FAQs</h1>
      <Line></Line>
      <div
        className="accordion"
        id="accordionPanelsStayOpenExample"
        style={{ margin: "2rem" }}
      >
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              What cardiology services are offered at the hospital?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div className="accordion-body">
              We provide a comprehensive range of cardiology services, including
              diagnostic testing, interventional procedures, and cardiac
              rehabilitation.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              Do you specialize in specific cardiac conditions?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div className="accordion-body">
              Yes, our team specializes in the diagnosis and treatment of
              various cardiac conditions such as coronary artery disease, heart
              failure, arrhythmias, and more.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              Who are the key members of the cardiology team?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div className="accordion-body">
              <strong>
                {" "}
                Our experienced team includes board-certified cardiologists,
                cardiac surgeons, nurses, and support staff, all dedicated to
                providing high-quality care.
              </strong>{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accordian;
