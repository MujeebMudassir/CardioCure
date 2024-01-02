import React from "react";
import Line from "./Line";

const BookApp = () => {
  return (
    <section className="appointment center">
      <h1 style={{ textAlign: "center" }}>Book Your Appointment</h1>
      <Line></Line>
      <div className="booking-container" style={{ marginTop: "2rem" }}>
        <div className="booking-image">
          <img
            className="booking-image"
            src="https://img.freepik.com/free-photo/calendar-agenda-event-meeting-reminder-schedule-graphic-concept_53876-125181.jpg?w=740&t=st=1704173981~exp=1704174581~hmac=0631485668ef9fdc920963a3c76aca92c04fe8105ffecda81d5859dc2c056ab2"
            alt="booking image"
          />
        </div>
        <div>
          <form>
            <div className="mb-3">
              <label for="nameInput" className="form-label">
                Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="nameInput"
                aria-describedby="nameInput"
              />
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Phone Number
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookApp;
