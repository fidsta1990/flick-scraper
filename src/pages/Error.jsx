import React from "react";
import error from "../assets/error.png";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="section error-section">
      <div className="container">
        <h3>OOPS... NO SUCH PAGE EXISTS</h3>
        <img src={error} alt="error page" />
        <Link to="/" className="btn">
          back to home
        </Link>
      </div>
    </section>
  );
};

export default Error;
