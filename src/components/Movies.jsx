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
        <article className="movies"></article>
      </div>
    </section>
  );
};

export default Movies;
