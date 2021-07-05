import "./Header.css";
import jouleLogo from "../images/JOULE_LOGO_HEADER.png";

const Header = () => {
  return (
    <div className="header-container">
      <div className="image-container">
        <img src={jouleLogo} alt="Joule Logo" className="logo" />
      </div>
      <div className="button-container">
        <h4>Find your fit!</h4>
        <button className="btn-primary">Shop Knee Sleves</button>
      </div>
    </div>
  );
};

export default Header;
