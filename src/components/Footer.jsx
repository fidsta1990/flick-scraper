import React from "react";
import { RiMovie2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { social } from "../data/links";

const Footer = () => {
  const created = new Date().getFullYear();
  return (
    <footer className="footer">
      <article className="footer-section wrap-footer">
        <Link to="/" className="logo">
          <RiMovie2Line className="logo-icon" style={{ color: "#fff" }} />
          <span className="logo-text">flixScraper</span>
        </Link>
        <p>
          © created by Fidel Inc <span id="created">{created}</span>
        </p>
        <article className="social">
          {social.map((link) => {
            const { icon, url, id } = link;
            return (
              <a href={url} key={id} className="icons">
                {icon}
              </a>
            );
          })}
        </article>
      </article>
    </footer>
  );
};

export default Footer;
