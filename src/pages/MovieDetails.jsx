import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieById } from "../fetch";
import { MovieCard } from "../components/MovieCard/MovieCard";

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        if (movieId) {
          const fetchedMovie = await fetchMovieById(movieId);
          setMovie(fetchedMovie);
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <div>
      {console.log(movie)}
      <MovieCard movie={movie} />
    </div>
  );
}
