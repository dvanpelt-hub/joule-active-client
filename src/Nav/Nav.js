import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Nav.css";
import jouleLogo from "../images/JOULE_LOGO_HEADER.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faBars,
  faEnvelope,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const [selected, setSelected] = useState(false);

  const handleSelect = () => {
    setSelected(!selected);
  };

  return (
    <nav className="topNavBar">
      <div className="nav-container">
        <div className="nav-logo">
          <img src={jouleLogo} alt="Joule Logo" className="logo" />
        </div>
        <div className="media-icon-container">
          <FontAwesomeIcon icon={faUserFriends} className="fb-icon" />
          <FontAwesomeIcon icon={faEnvelope} className="email-icon" />
        </div>
        <ul className={selected ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="header-container"
              className="nav-link"
              smooth={true}
              duration={1200}
              onClick={handleSelect}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="about-container"
              className="nav-link"
              smooth={true}
              duration={1200}
              onClick={handleSelect}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="product-container"
              className="nav-link"
              smooth={true}
              duration={1200}
              onClick={handleSelect}
            >
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="contact-container"
              className="nav-link"
              smooth={true}
              duration={1200}
              onClick={handleSelect}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="nav-icon" onClick={handleSelect}>
          <FontAwesomeIcon
            icon={selected ? faTimes : faBars}
            className={selected ? "fas fa-times" : "fas fa-bars"}
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
