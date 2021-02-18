import React from "react";
import { useGlobalContext } from "../data/context";
import Loading from "./Loading";
import { Link } from "react-router-dom";

const Movies = () => {
  const { loading, movies } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  return (
    <section className="section">
      <div className="container">
        <h2>Showcase</h2>
        <article className="movies">
          {movies.map((movie) => {
            const {
              imdbID: id,
              Title: title,
              Year: year,
              Poster: image,
            } = movie;

            return (
              <div key={id}>
                <h3>{title}</h3>
                <h3>{year}</h3>
                <img src={image} alt={title} />
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
};

export default Movies;
