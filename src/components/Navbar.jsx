import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RiMovie2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { links } from "../data/links";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header ">
          <Link to={links[0].url} className="logo">
            <RiMovie2Line className="logo-icon" />
            <span className="logo-text">flixScraper</span>
          </Link>
          <button className="nav-toggle" onClick={() => setShow(!show)}>
            <FaBars />
          </button>
        </div>

        <div
          className={`${
            !show ? "links-container " : "links-container show-container"
          }`}
        >
          <ul className="links">
            {links.map((link, index) => {
              return (
                <Link to={link.url} key={index}>
                  {link.text}
                </Link>
              );
            })}
          </ul>
        </div>

        <button className="register btn">sign up</button>
      </div>
    </nav>
  );
};

export default Navbar;
