import React from "react";
import Line from "./Line";

const GoogleMap = () => {
  return (
    <section className="center">
      <h1
        style={{
          textAlign: "center",
          marginTop: "2rem",
        }}
      >
        Location
      </h1>
      <Line></Line>
      <div
        style={{
          width: "calc(100% - 2rem)",
          margin: "1rem 1rem",
          border: "2px solid black",
          borderRadius: "1rem",
          overflow: "hidden",
          marginTop: "2rem",
        }}
      >
        <iframe
          width="100%"
          height="600"
          frameborder="0"
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Faridabad%20City%20Hospital%20and%20Pilex,%20hospital,%20Faridabad,%20India+(CardioCure)&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.maps.ie/population/">Population mapping</a>
        </iframe>
      </div>
    </section>
  );
};

export default GoogleMap;
