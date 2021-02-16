import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Movie from "./pages/movie-p/Movie";
import Contact from "./pages/contact/Contact";
import Error from "./pages/error-p/Error";

function App() {
  return (
    <Switch>
      <Route path="/landing">
        <Landing />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/movies/:id" children={<Movie />} />
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="*">
        <Error />
      </Route>
    </Switch>
  );
}

export default App;
