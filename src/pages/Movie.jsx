import React, { useState, useEffect } from "react";
import { API_ENDPOINT } from "../data/context";
import { useParams, Link } from "react-router-dom";
import Loading from "../components/Loading";
import { url } from "../components/Movies";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [isError, setIsError] = useState({ show: false, msg: "" });
  const [loading, setLoading] = useState(true);

  const fetchMovie = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_ENDPOINT}&i=${id}`);
      const data = await res.json();
      if (data) {
        setMovie(data);
        setIsError({ show: false, msg: "" });
      } else {
        setIsError({ show: true, msg: data.Error });
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, [id]);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (isError.show) {
    return (
      <div className="error">
        <h2>{isError.msg}</h2>
        <div className="center-btn">
          <Link to="/" className="btn">
            back to movies
          </Link>
        </div>
      </div>
    );
  }

  const {
    Title: title,
    Released: year,
    Poster: image,
    Rated: rate,
    imdbRating: rating,
    Plot: bio,
    Genre: genre,
    Director: dir,
    Actors: actor,
  } = movie;

  return (
    <section className="single-movie">
      <h2>{title}</h2>
      <article className="section">
        <div className="movie-wrap">
          <img src={image === "N/A" ? url : image} alt={title} />

          <div className="movie-info">
            <p>{bio}</p>
            <p>
              Actors: <span>{actor}</span>
            </p>
            <p>
              Director: <span>{dir}</span>
            </p>
            <p>
              Genre: <span>{genre}</span>
            </p>
            <p>
              Release: <span>{year}</span>
            </p>
            <div className="movie-review">
              <div className="sub-title">
                <p>Rated:</p>
                <span className="btn review-btn">{rate}</span>
              </div>
              <div className="sub-title">
                <p>Votes:</p>
                <span className="btn review-btn">{rating}</span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Movie;
