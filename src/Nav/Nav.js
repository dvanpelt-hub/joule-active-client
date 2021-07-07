import "./Nav.css";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <div className="nav-wrap">
      <input type="checkbox" className="toggler" />
      <div className="hamburger">
        <div></div>
      </div>
      <div className="menu">
        <div>
          <div>
            <ul>
              <li>
                <Link to="header-container" smooth={true} duration={1200}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="about-container" smooth={true} duration={1200}>
                  About
                </Link>
              </li>
              <li>
                <a href="https://www.amazon.com/s?me=A366LPOP2A82ZM&marketplaceID=ATVPDKIKX0DER">
                  Knee Sleeves
                </a>
              </li>
              <li>
                <Link to="contact-container" smooth={true} duration={1200}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
