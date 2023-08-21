import React from "react";
import Background from "../../assets/home_bg2.jpg";
import HeaderSocials from "./HeaderSocials.jsx";
import { Parallax } from "react-parallax";
import Card from "../Team/Card";
import Slider from "./Slider";
import Programs from "./Programs";
import ExpSlider from "./ExpSlider";
import ExpCard from "./ExpCard";
import { BsDash } from "react-icons/bs";
import "./About.css";
import blood_donate from "../../assets/events/blood_donation.jpeg";
function Home() {
  return (
    <div className="Home">
      <div className="paralax">
        <Parallax strength={175} bgImage={Background}>
          <div className="home-content">
            <div className="home-title-content">
              Prayaas
              <h2>
                <BsDash />
                Social Club of VNIT Nagpur
              </h2>
            </div>
          </div>
        </Parallax>
      </div>

      <div className="container experience_container">
        <div>
          <section className="home-section">
            <h2 className="home-secHeading">About Us</h2>
            <p className="home-text" style={{ color: "black" }}>
              <b>PRAYAAS </b>is an official social initiative program of VNIT
              Nagpur. This program is inspired by the vision of Dr. A.P.J.Abdul
              Kalam of making education compliant to societal needs and
              providing knowledge connectivity to rural India. The idea of a
              contributing one's self to the society or in fact, repaying the
              society with what it has bestowed us is an urge that couldn't be
              trapped within for a long time. The bottled conscience gave rise
              to the group PRAYAAS.The thought was nurtured by Mr. Pratyush
              Prabhakar, now an alumnus of VNIT. In September 2006, Prayaas came
              to existence which now has grown into a concrete well planned
              activity supported by the Technical Education students which
              Quality Improvement Program (TEQIP), Govt. of India.
              <br />
            </p>
          </section>
        </div>
        <div>
          <section className="home-section">
            <h5 className="home-secHeading">Upcoming Events</h5>
            {/* <p className="home-text" style={{ color: "black" }}>
            <h4 className="text-gray-700 mb-1" style={{ color: '#0f0f0f', textTransform: 'uppercase', fontSize: '2.5rem', fontWeight: 'bold' }}>
  Blood Donation Camp
</h4>
              <p className="text-gray-700 mb-1" style={{ fontSize: '1.5rem' }}>
      <span className="info-label">Date:</span> 15th August 2023
    </p>
    <p className="text-gray-700 mb-1" style={{ fontSize: '1.5rem' }}>
      <span className="info-label">Time:</span> 09:00 to 1:00 pm
    </p>
    <p className="text-gray-700 mb-1" style={{ fontSize: '1.5rem' }}>
      <span className="info-label">Venue:</span> Class Room Complex
    </p>
            </p>
            <img
              src={blood_donate}
              alt="Event Poster 1"
              className="img-effect"
              style={{ maxWidth: "60%", height: "auto" }}
            /> */}
          </section>
        </div>
      </div>
      <section className="home-section">
        <h2 className="home-secHeading">Our Work</h2>
        <Programs />
      </section>

      <section className="home-section">
        <div>
          <h2 className="home-secHeading">GALLERY</h2>
          <div className="slider-cont">
            <Slider />
          </div>
        </div>
      </section>

      <div>
        <h2 className="home-secHeading">Experience </h2>
        <div className="exp-cont">
          <ExpSlider />
        </div>
      </div>
    </div>
  );
}

export default Home;
