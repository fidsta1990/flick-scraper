import React from "react";
import { useGlobalContext } from "../data/context";

const SearchForm = () => {
  const { query, setQuery, isError } = useGlobalContext();

  return (
    <form className="form" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        className="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {isError.show && <div className="error">{isError.msg}</div>}
    </form>
  );
};

export default SearchForm;
