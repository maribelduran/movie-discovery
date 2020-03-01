const TMDB_API_URL = process.env.TMDB_API_URL;
const TMDB_API_KEY = process.env.TMDB_API_KEY;

const movieDbApi = {
  // More information about each endpoint can be found at : https://developers.themoviedb.org/3/movies
  movies: {
    // Get a list of the current popular movies on TMDb
    getPopular: () =>
      `${TMDB_API_URL}/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`,

    // Search for movies on TMDb
    search: query =>
      `${TMDB_API_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`,

    // Get the primary information about a movie on TMDb
    getOne: movie_id =>
      `${TMDB_API_URL}/movie/${movie_id}?api_key=${TMDB_API_KEY}&language=en-US`
  }
};

module.exports = movieDbApi;
