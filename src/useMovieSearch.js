import { useState } from "react";
import axios from "axios";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzg0YWRmNzhkMGNjODY0NDlmMjY1MjI1MDExYzg1OSIsIm5iZiI6MTcyMjAwMjM2Ny40MzYzODQsInN1YiI6IjY2YTNhYTk1YThiZGRiYmVmOTljMGUzZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.54Yr5rv1L8aYkTaHEEGXY-ZtPtBK4GAoQX-wNBzV52Y"; // Replace with your actual API key
const BASE_URL = "https://api.themoviedb.org/3/search/movie";

const useMovieSearch = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchMovies = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const url = `${BASE_URL}?query=${encodeURIComponent(
        query
      )}&include_adult=false&language=en-US&page=1`;
      const response = await axios.get(url, {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      });

      setMovies(response.data.results);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { movies, error, loading, searchMovies };
};

export default useMovieSearch;
