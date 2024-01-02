import React from "react";
import Line from "./Line";

const Testimonials = () => {
  return (
    <section
      className="textimonials center"
      style={{ textAlign: "center", padding: "0rem 0.5rem" }}
    >
      <h1 style={{ marginTop: "2rem" }}>Patient Reviews</h1>
      <Line></Line>
      <div
        id="carouselExampleControls"
        className="carousel slide center"
        data-bs-ride="carousel"
        style={{
          height: "500px",
          width: "100%",
          backgroundColor: "black",
          objectFit: "cover",
          overflow: "hidden",
          marginTop: "2rem",
        }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/ZYlFJI2piuU"
              title="Faridabad&#39;s First-Ever Use of Orbital Atherectomy Device in Angioplasty"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="carousel-item">
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/OePKLjTKNMs"
              title="Asian Hospital&#39;s Heart Treatment Changed Faridabad Patient&#39;s Life Forever"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="carousel-item">
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/OcF_bSxD_OQ"
              title="Coronary Angiography || Patient Feedback || Asian Hospital || Ethiopia"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
