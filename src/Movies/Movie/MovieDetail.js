import React from "react";
import "./MovieDetail.css";

const POSTER_PATH = "http://image.tmdb.org/t/p/w500";

const genresString = (genres = []) => {
  return genres
    .reduce((string, genre) => string + genre.name + " / ", "")
    .slice(0, -2);
};

const MovieDetail = ({ movie = {} }) => {
  const genres = genresString(movie.genres);

  return (
    <div
      className="movie-detail-card"
      style={{
        display: "flex",
        maxWidth: "900px",
        minHeight: "300x",
        margin: "30px",
        padding: "10px"
      }}
    >
      <div style={{ width: "40% ", maxWidth: "250px" }}>
        <div className="card-img" style={{ height: "100%", width: "100%" }}>
          <img
            src={`${POSTER_PATH}${movie.poster_path}`}
            alt={movie.title}
            className="card-img_src"
          />
        </div>
      </div>

      <div style={{ width: "60%", paddingLeft: "10px" }}>
        <h3>{movie.title}</h3>
        <p>{genres}</p>
        <p>{`Released ${movie.release_date}`}</p>
        <p>{`${movie.runtime} minutes`}</p>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
