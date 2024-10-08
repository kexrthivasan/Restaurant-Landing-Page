import React from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";

import "./Navbar.css";

const Navbar = () => {
  const [togglemenu, setTogglemenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app-logo" />
      </div>
      <div className="app__navbar-small-screen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          className="Ham"
          onClick={() => setTogglemenu(true)}
        />
        {togglemenu && (
          <div className="app__navbar-smallscreen-overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              color="#fff"
              fontSize={27}
              className="overlay__close"
              onClick={() => setTogglemenu(false)}
            />
            <ul className="app__navbarsmall-screen-links">
              <li className="p__opensans">
                <a href="#home">Home</a>
              </li>
              <li className="p__opensans">
                <a href="#about">About</a>
              </li>
              <li className="p__opensans">
                <a href="#menu">Menu</a>
              </li>
              <li className="p__opensans">
                <a href="#awards">Awards</a>
              </li>
              <li className="p__opensans">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
