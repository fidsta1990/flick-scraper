import React, { useState, useEffect, useContext } from "react";

export const API_ENDPOINT = `https://www.omdbapi.com/apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState({ show: false, msg: "" });
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("batman");

  const fetchMovies = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_ENDPOINT}&s=${query}`);
      const data = await res.json();
      if (data.Response === "True") {
        setMovies(data.Search);
        setError({ show: false, msg: "" });
      } else {
        setError({ show: true, msg: data.Error });
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [query]);

  return (
    <AppContext.Provider value={{ loading, error, movies, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
