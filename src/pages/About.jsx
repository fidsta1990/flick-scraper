import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about">
      <article className="section">
        <h2>
          About <span>flixScraper</span>
        </h2>
        <p>
          For all you movie goers out there that have the need to further delve
          into a bio of your favourite movies, here at <span>flixScraper</span>{" "}
          we've got you covered. We pull data from the OMDB api which is
          basically an area online which stores all the info you see on our
          site.
        </p>
        <p>
          We hope you enjoy searching for old classics and discover new movies
          to watch as well.
        </p>

        <div className="center-btn">
          <Link to="/" className="btn">
            discover movies here
          </Link>
        </div>
      </article>
    </section>
  );
};

export default About;
