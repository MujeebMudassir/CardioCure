import React from "react";
import Line from "./Line";

const data = [
  {
    id: 1,
    name: "Diagnostic Services",
    imgUrl:
      "https://st3.depositphotos.com/1177973/12825/i/450/depositphotos_128254290-stock-photo-cardiologist-holding-red-heart-with.jpg",
    list: [
      "Electrocardiogram (ECG or EKG)",
      "Stress testing",
      "Echocardiography",
      "Holter monitoring",
      "Cardiac catheterization",
      "CT angiography",
      "MRI imaging",
    ],
  },
  {
    id: 2,
    name: "Preventive Cardiology",
    imgUrl:
      "https://www.myheart.org.sg/wp-content/uploads/2019/03/What-is-Preventive-Cardiology_-scaled.jpg",
    list: [
      "Risk assessment for heart diseases",
      "Lifestyle counseling (diet, exercise, smoking cessation)",
      "Blood pressure management",
      "Cholesterol management",
      "Diabetes management",
    ],
  },
  {
    id: 3,
    name: "Treatment Cardiovascular Conditions",
    imgUrl:
      "https://www.worldkidneyday.org/wp-content/uploads/2018/05/Hearts_SoMe-624x624.jpg",
    list: [
      "Hypertension (high blood pressure) management",
      "Coronary artery disease treatment",
      "Heart failure management",
    ],
  },
  {
    id: 4,
    name: "Interventional Cardiology",
    imgUrl:
      "https://d14d5nk8lue86f.cloudfront.net/s3fs-public/styles/header_image/public/2018-09/Why%20I%20Chose%20a%20Career%20in%20Interventional%20Cardiology.jpg?itok=vXhN9eGv",
    list: [
      "Angioplasty and stent placement",
      "Catheter-based procedures for heart conditions",
      "Balloon valvuloplasty",
    ],
  },
  {
    id: 5,
    name: "Electrophysiology Services",
    imgUrl:
      "https://res.cloudinary.com/derwl0zbi/image/upload/f_auto,w_1400,h_720,c_lfill/mc-prd/ep-at-amc-022021-2jpeg-1.jpg",
    list: [
      "Diagnosis and treatment of electrical system disorders of the heart",
      "Implantation and management of pacemakers and defibrillators",
    ],
  },
  {
    id: 6,
    name: "Cardiac Rehabilitation",
    imgUrl:
      "https://ayu.health/blog/wp-content/uploads/2023/05/human-internal-organ-with-heart_1308-115774.jpg",
    list: [
      "Customized exercise programs for heart health",
      "Education on lifestyle modification",
      "Emotional support for patients recovering from cardiac events",
    ],
  },
  {
    id: 7,
    name: "Heart Rhythm Management",
    imgUrl:
      "https://www1.racgp.org.au/getattachment/AJGP/2018/May/Cardiac-rhythm-management-devices/AJGP-05-2018-Focus-Stevenson-Fig-4.jpg.aspx?lang=en-AU",
    list: [
      "Evaluation and treatment of irregular heart rhythms",
      "Medication management",
      "Ablation procedures",
    ],
  },
  {
    id: 8,
    name: "Heart Surgery Referral",
    imgUrl:
      "https://www.nm.org/-/media/northwestern/healthbeat/images/health%20library/nm-ten-signs-cardiologist_preview.jpg",
    list: [
      "Collaborating with cardiothoracic surgeons for surgical interventions when necessary",
    ],
  },
  {
    id: 9,
    name: "Telecardiology Services",
    imgUrl:
      "https://bizimages.withfloats.com/actual/5fc9019ae55c2d0001152ba0.jpg",
    list: [
      "Remote monitoring of cardiac conditions",
      "Virtual consultations for follow-ups and routine care",
    ],
  },
];

const Services = () => {
  return (
    <section className="services center " id="services">
      <h2 style={{ textAlign: "center", marginTop: "2rem" }}>Treatments</h2>
      <Line></Line>

      <section className="articles" style={{ marginTop: "2rem" }}>
        {data.map((item) => {
          return (
            <article key={item.id}>
              <div className="article-wrapper">
                <figure>
                  <img src={item.imgUrl} alt="" />
                </figure>
                <div className="article-body">
                  <h2>{item.name}</h2>
                  <ul>
                    {item.list.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </section>
  );
};

export default Services;
