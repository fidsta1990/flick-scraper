import React from "react";
import SearchForm from "../components/SearchForm";
import Movies from "../components/Movies";
import Footer from "../components/Footer";
import { BiDownArrow } from "react-icons/bi";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home">
      <div className="header">
        <div className="header-text-wrap">
          <h2>
            Welcome to flix<span>Scraper</span>
          </h2>
          <h4>your personal movie library</h4>
        </div>
        <div className="center-btn">
          <BiDownArrow className="btn-down" />
        </div>
      </div>
      <div className="container">
        <h3>Search Movie</h3>
        <SearchForm />
        <Movies />
      </div>
      <Footer />
    </section>
  );
};

export default Home;
