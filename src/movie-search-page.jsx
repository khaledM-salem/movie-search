import React, { useState } from "react";
import axios from "axios";
import useMovieSearch from "./useMovieSearch";

const MovieSearchPage = () => {
  const [query, setQuery] = useState("");
  const { movies, error, loading, searchMovies } = useMovieSearch();

  const handleSearch = () => {
    searchMovies(query);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for movies..."
      />
      <button onClick={handleSearch}>Search</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieSearchPage;
