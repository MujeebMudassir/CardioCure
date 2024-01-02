import React from "react";
import { useEffect } from "react";

const Vivek = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="vivek center doctor-info" style={{ marginTop: "5rem" }}>
      <img
        src="https://www.kauveryhospital.com/doctorimage/recent/Dr-Suresh-Kumar-B2022-06-08-10:25:52am.jpg"
        className="img-fluid"
        alt="..."
        style={{ float: "right" }}
      ></img>
      <h3>DR VIVEK KUMAR</h3>
      <p style={{ marginTop: "2rem" }}>
        My mission is to provide excellent healthcare so patients can be healthy
        enough to fulfill their mission. Our area is so culturally diverse. I
        appreciate the differences in cultures and I am able to connect with
        patients who have different physical, mental and spiritual concerns.
        Patients have taught me a great deal about the U.S. healthcare system
        and their experiences.
      </p>
      <h5>Education</h5>
      <ul>
        <li>
          <b>Residency:</b> Eastern Virginia Graduate School of Medicine, Ghent
          Family Practice, Norfolk, VA
        </li>
        <li>
          <b>Medical School:</b> University of North Carolina School of
          Medicine, Chapel Hill, NC
        </li>
        <li>
          <b>Undergraduate:</b> Bachelor of Science in Biology (summa cum
          laude), Spelman College, Atlanta, GA
        </li>
      </ul>
      <h5>Professional Organizations & Affiliations</h5>
      <ul>
        <li>
          {" "}
          <b> Member: </b> American Academy of Family Physicians
        </li>
        <li>
          <b>Adjunct Faculty:</b> Emory University, Department of Family &
          Preventive Medicine, Atlanta, GA
        </li>
        <b>Member:</b> <li> Georgia Academy of Family Physicians</li>
        <li>
          <b>Member:</b> American Medical Association Member: Emory Decatur
          Hospital
        </li>
        <li>
          {" "}
          <b>Member:</b> Emory Decatur Hospital
        </li>
      </ul>
    </section>
  );
};

export default Vivek;
