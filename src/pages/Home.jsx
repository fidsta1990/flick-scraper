import React from "react";
import SearchForm from "../components/SearchForm";
import Movies from "../components/Movies";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <section className="home">
      <div className="header"></div>
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
