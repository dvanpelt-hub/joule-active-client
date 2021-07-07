import "./About.css";
import aboutUs from "../images/aboutus.jpg";
import signatureSS from "../images/SSSIG-1.png";

const About = () => {
  return (
    <div className="about-container">
      <img src={aboutUs} alt="Man working out while wearing Joule products" />
      <div className="about-text-content">
        <h2>Who we are</h2>
        <span>--- * * * ---</span>
        <p>
          We're new, but we've got big ideas. As a gym/fitness enthusiasts,
          we've often found it difficult to find affordable products that
          maintain quality. At JOULE Active, our objective is to provide
          affordable, quality, and just fresh looking gear that lets you focus
          your energy on working out rather than everything else.
        </p>
        <img src={signatureSS} alt="Company signature" />
      </div>
    </div>
  );
};

export default About;
