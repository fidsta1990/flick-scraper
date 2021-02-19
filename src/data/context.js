import React, { useState, useEffect, useContext } from "react";

export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [isError, setIsError] = useState({ show: false, msg: "" });
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("avengers");

  const fetchMovies = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_ENDPOINT}&s=${query}`);
      const data = await res.json();

      if (data.Response === "True") {
        setMovies(data.Search);
        setIsError({ show: false, msg: "" });
      } else {
        setIsError({ show: true, msg: data.Error });
      }
      setLoading(false);
    } catch (error) {
      // console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [query]);

  return (
    <AppContext.Provider value={{ loading, isError, movies, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
