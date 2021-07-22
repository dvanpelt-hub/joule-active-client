import "./Nav.css";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <div className="topNavBar">
      <Link to="header-container" smooth={true} duration={1200}>
        Home
      </Link>
      <Link to="about-container" smooth={true} duration={1200}>
        About
      </Link>
      <Link to="product-container" smooth={true} duration={1200}>
        Products
      </Link>
      <Link to="contact-container" smooth={true} duration={1200}>
        Contact
      </Link>
    </div>
  );
};

export default Nav;
