import React, { useState, useEffect, Fragment } from "react";
import useFetch from "use-http";
import MoviesSearch from "./MoviesSearch";
import MoviesList from "./MoviesList";
import { Error, Loading } from "../common";

const MoviesContainer = () => {
  const [data, setData] = useState({ results: [] });
  const [query, setQuery] = useState("");
  const [url, setUrl] = useState("/popular");
  const [heading, setHeading] = useState("Popular");

  const { get: getMovies, loading, error } = useFetch("/api/movies");

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMovies(url);
      setData(data);
    };
    fetchData();
  }, [url, getMovies]);

  const handleSubmit = event => {
    event.preventDefault();
    setHeading("Search Result");
    setUrl(`/search?query=${query}`);
  };

  return (
    <Fragment>
      <MoviesSearch input={query} onChange={setQuery} onSubmit={handleSubmit} />
      {error && <Error error={error} />}
      {loading ? (
        <Loading />
      ) : (
        data.results && <MoviesList title={heading} movies={data.results} />
      )}
    </Fragment>
  );
};

export default MoviesContainer;
