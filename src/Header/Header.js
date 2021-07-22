import "./Header.css";
import { Link } from "react-scroll";
import jouleLogo from "../images/JOULE_LOGO_HEADER.png";
import jouleVideo from "../images/jouleVideo.mp4";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-overlay" />
      <div className="image-container">
        <video autoPlay muted loop id="jouleVideo">
          <source src={jouleVideo} type="video/mp4" />
        </video>
        <div className="logo-container">
          <img src={jouleLogo} alt="Joule Logo" className="logo" />
        </div>
        <div className="button-container">
          <h3>GET WORK DONE!</h3>
          <button className="btn-primary">
            <Link to="product-container" smooth={true} duration={1200}>
              Shop Knee Sleeves
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
