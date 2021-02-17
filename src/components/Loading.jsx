import React from "react";
import Spinner from "../assets/Spinner.svg";

const Loading = () => {
  return (
    <div>
      <img src={Spinner} alt="loading" />
    </div>
  );
};

export default Loading;
