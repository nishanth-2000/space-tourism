import { useState } from "react";
import { Link } from "react-router-dom";
import { NavbarLink } from "./Navbar-link";
import useWindowWidth from "../hooks/useWindowWidth";

import logo from "../static/logo.svg";
import iconClose from "../static/icon-close.svg";
import iconMenu from "../static/icon-hamburger.svg";
import "../styles/navbar.scss";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const windowWidth = useWindowWidth();
  const mobileWidth = 480;

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  const menuIcon = (
    <img
      src={iconMenu}
      alt="hamburger-icon"
      className="menu-icon"
      onClick={toggleMenu}
    />
  );

  const closeIcon = (
    <img
      src={iconClose}
      alt="close-icon"
      className="close-icon"
      onClick={toggleMenu}
    />
  );

  const links = (
    <div className="navbar">
      {windowWidth < mobileWidth ? closeIcon : ""}
      <NavbarLink linkNum="00" linkName="home" linkURL="/space-tourism" />
      <NavbarLink
        linkNum="01"
        linkName="destination"
        linkURL="/space-tourism/destination"
      />
      <NavbarLink linkNum="02" linkName="crew" linkURL="/space-tourism/crew" />
      <NavbarLink
        linkNum="03"
        linkName="technology"
        linkURL="/space-tourism/technology"
      />
    </div>
  );

  return (
    <nav>
      <Link to="/" className="logo">
        <img src={logo} alt="space-logo" />
      </Link>
      <div className="separator-line"></div>

      {/* if (windowWidth > mobileWidth) `links` be shown.
          else if (window width <= the mobile width && showMenu) `links` be shown.
          else if (window width <= the mobile width && !showMenu) `menuIcon` be shown. */}

      {windowWidth > mobileWidth ? links : showMenu ? links : menuIcon}
    </nav>
  );
};