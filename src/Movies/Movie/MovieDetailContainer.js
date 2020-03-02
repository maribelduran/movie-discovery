import React from "react";
import useFetch from "use-http";
import { useParams } from "react-router-dom";
import MovieDetail from "./MovieDetail";
import { Error, Loading } from "../../common";

const MovieDetailContainer = () => {
  const { id } = useParams();
  const url = `/api/movies/${id}`;

  const { loading, error, data: movie } = useFetch(url, {}, []);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;

  return <MovieDetail movie={movie} />;
};

export default MovieDetailContainer;
