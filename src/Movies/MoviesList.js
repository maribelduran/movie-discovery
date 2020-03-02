import React from "react";
import Movie from "./Movie/Movie";
import "./MovieList.css";

const MoviesList = ({ title, movies = [] }) => {
  return (
    <div className="movies">
      <h2 className="list-title">{title}</h2>
      <ul className="movie-list">
        {movies.map(movie => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
