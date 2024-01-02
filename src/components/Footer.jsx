import React from "react";

const Footer = () => {
  return (
    <section className="Footer ">
      <div className="footer-container">
        <div className="paragraph-container">
          <p>
            Nikhil Hospital is one of the Best Multispeciality Hospital in both
            twin cities Hyderabad & Secunderabad. Nikhil Hospitals is equipped
            with advanced technology and best team of doctors for better
            treatment.
          </p>
          <div className="icons">
            <div className="icon-container">
              <img src="./src/icons/instagram.png" alt="" height={25} />
            </div>
            <div className="icon-container">
              <img src="./src/icons/facebook.png" alt="" height={25} />
            </div>
            <div className="icon-container">
              <img src="./src/icons/youtube.png" alt="" height={25} />
            </div>
          </div>
        </div>

        <div className="quicklinks arrow-list">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Blog</li>
            <li>Book an Appointment</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="contact-us">
          <h4>Contact Us</h4>
          <p>
            Nikhil Hospitals, Srinagar Colony Main Rd, SBH Colony, Ameerpet,
            Hyderabad, Telangana 500073
          </p>
          <h4>Google Map Location</h4>
          <h4>040 7124 1111</h4>
        </div>
      </div>
    </section>
  );
};

export default Footer;
