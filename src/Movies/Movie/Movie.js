import React from "react";
import { Link } from "react-router-dom";
import "./Movie.css";

// Should export from a common folder instead
const POSTER_PATH = "http://image.tmdb.org/t/p/w500";

const Movie = ({ movie = {} }) => {
  return (
    <li key={movie.id} className="single-card">
      <Link to={`/${movie.id}`}>
        <div className="card-img">
          <img
            src={`${POSTER_PATH}${movie.poster_path}`}
            alt={movie.title}
            className="card-img_src"
          />
        </div>
        <div className="card-info">
          <span className="card-name">{movie.title}</span>
          <span className="card-metadata">
            <span> {`Release Date: ${movie.release_date}`}</span>
            <br></br>
            <span> {`${movie.vote_count} votes`}</span>
          </span>
          <span className="card-metadata"></span>
        </div>
      </Link>
    </li>
  );
};

export default Movie;

/*
export const Poster = styled.img`
  box-shadow: 0 0 35px black;
`;


<Link to={`/${movie.id}`}>
      <Overdrive id={`${movie.id}`}>
        <Poster
          data-testid="movie-img"
          src={`${POSTER_PATH}${movie.poster_path}`}
          alt={movie.title}
        />
      </Overdrive>
    </Link>
  );
  */
