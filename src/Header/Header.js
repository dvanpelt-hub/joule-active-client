import "./Header.css";
import Nav from "../Nav/Nav";
import jouleLogo from "../images/JOULE_LOGO_HEADER.png";
import jouleVideo from "../images/jouleVideo.mp4";

const Header = () => {
  return (
    <div className="header-container">
      <div className="image-container">
        <video autoPlay muted loop id="jouleVideo">
          <source src={jouleVideo} type="video/mp4" />
        </video>
        <img src={jouleLogo} alt="Joule Logo" className="logo" />
        <div className="nav-container">
          <Nav />
        </div>
        <div className="button-container">
          <h4>Find your fit!</h4>
          <button className="btn-primary">Shop Knee Sleves</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
