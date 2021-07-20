import "./About.css";
import React, { useState, useEffect } from "react";
import aboutUs from "../images/aboutus.jpg";
import aboutUs2 from "../images/aboutus2.jpg";
import signatureSS from "../images/SSSIG-1.png";

const About = () => {
  const [displayImage, setDisplayImage] = useState("");

  // May come back to this to find a better way of handling dynamic image rendering /
  useEffect(() => {
    if (window.innerWidth < 960) {
      setDisplayImage(aboutUs);
    } else {
      setDisplayImage(aboutUs2);
    }
  }, [setDisplayImage]);

  return (
    <div className="about-container">
      <img
        id="main-image"
        src={displayImage}
        alt="Man working out while wearing Joule products"
      />
      <div className="about-text-content">
        <h2>WHO WE ARE</h2>
        <span>--- * * * ---</span>
        <p>
          We're new, but we've got big ideas. As a gym/fitness enthusiasts,
          we've often found it difficult to find affordable products that
          maintain quality. At JOULE Active, our objective is to provide
          affordable, quality, and just fresh looking gear that lets you focus
          your energy on working out rather than everything else.
        </p>
        <img src={signatureSS} alt="Company signature" id="pri-signature" />
      </div>
    </div>
  );
};

export default About;
