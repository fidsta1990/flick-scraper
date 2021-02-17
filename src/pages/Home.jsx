import React from "react";
import SearchForm from "../components/SearchForm";
import Movies from '../components/Movies'

const Home = () => {
  return (
    <section className="home">
      <div className="header"></div>
      <div className="container">
        <h3>Search Movie</h3>
        <SearchForm />
        <Movies/>
      </div>
    </section>
  );
};

export default Home;
