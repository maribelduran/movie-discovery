import React from "react";

const Error = (error = {}) => {
  return <p>{error.message || "There was an error. Please try again."}</p>;
};

export default Error;
