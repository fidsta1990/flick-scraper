import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import About from "./pages/About";
import Movie from "./pages/Movie";
import Contact from "./pages/Contact";
import Error from "./pages/Error";


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
