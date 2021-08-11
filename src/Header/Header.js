import "./Header.css";
import jouleVideo from "../images/jouleVideo.mp4";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-overlay" />
      <div className="image-container">
        <video autoPlay muted loop id="jouleVideo">
          <source src={jouleVideo} type="video/mp4" />
        </video>
        <div className="slogan-container">
          <h3>Get work done.</h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
