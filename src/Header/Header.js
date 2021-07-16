import "./Header.css";
import Nav from "../Nav/Nav";
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
        <div className="nav-container">
          <Nav />
        </div>
        <div className="button-container">
          <h3>Find your fit!</h3>
          <button className="btn-primary">Shop Knee Sleves</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
