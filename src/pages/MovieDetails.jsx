import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieById } from "../fetch";
import { MovieCard } from "../components/MovieCard/MovieCard";
import { Loader } from "../components/Loader/Loader";
import { ErrorMessage } from "../components/ErrorMessage/ErrorMessage";

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(false);
        if (movieId) {
          const fetchedMovie = await fetchMovieById(movieId);
          setMovie(fetchedMovie);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <MovieCard movie={movie} />
    </div>
  );
}
