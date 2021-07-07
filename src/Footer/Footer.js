import "./Footer.css";
import footerLogo from "../images/JOULE_LOGO_FOOTER.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="img-container">
        <img src={footerLogo} alt="Joule logo" />
      </div>
    </div>
  );
};

export default Footer;
