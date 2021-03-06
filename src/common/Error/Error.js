import React from "react";

const Error = (error = {}) => {
  return (
    <p style={{ textAlign: "center" }}>
      {error.message || "There was an error. Please try again."}
    </p>
  );
};

export default Error;
