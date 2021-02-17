import React, { useState } from "react";

const SearchForm = () => {
  const handleSubmit = () => {
    console.log("submit");
  };
  const handleChange = () => {
    console.log("change");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input type="text" className="search" onChange={handleChange} />
    </form>
  );
};

export default SearchForm;
