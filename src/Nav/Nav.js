import "./Nav.css";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <div className="topNavBar">
      <a href="#home" className="activeLink">
        <Link to="header-container" smooth={true} duration={1200}>
          Home
        </Link>
      </a>
      <a href="#about">
        <Link to="about-container" smooth={true} duration={1200}>
          About
        </Link>
      </a>
      <a href="https://www.amazon.com/s?me=A366LPOP2A82ZM&marketplaceID=ATVPDKIKX0DER">
        <Link to="product-container" smooth={true} duration={1200}>
          Products
        </Link>
      </a>
      <a href="#contact">
        <Link to="contact-container" smooth={true} duration={1200}>
          Contact
        </Link>
      </a>
    </div>
  );
};

export default Nav;
