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
      <h2 className="movie-title">Showcase</h2>
      <article className="movies">
        {movies.map((movie) => {
          const { imdbID: id, Title: title, Year: year, Poster: image } = movie;

          return (
            <div key={id} className="movie">
              <img src={image} alt={title} />
              <div className="caption">
                <span>{title}</span>
                <span>Release: {year}</span>
              </div>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default Movies;
