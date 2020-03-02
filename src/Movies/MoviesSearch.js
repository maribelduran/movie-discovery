import React from "react";
import "./MovieSearch.css";

const MoviesSearch = ({ input, onChange, onSubmit }) => {
  return (
    <div className="search-form">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={input}
          onChange={e => onChange(e.target.value)}
        />
        <button type="submit" disabled={input.length === 0}>
          {"Search"}
        </button>
      </form>
    </div>
  );
};

export default MoviesSearch;
