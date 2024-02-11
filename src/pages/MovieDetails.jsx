import { useState, useEffect, Suspense } from "react";
import { useLocation, useParams, Link, Outlet } from "react-router-dom";
import { fetchMovieById } from "../fetch";
import { MovieCard } from "../components/MovieCard/MovieCard";
import { Loader } from "../components/Loader/Loader";
import { ErrorMessage } from "../components/ErrorMessage/ErrorMessage";
import { Backlink } from "../components/Backlink/Backlink";

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/movies";

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
      <Backlink to={backLinkHref}>Back to movies</Backlink>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <MovieCard movie={movie} />
      <div style={{ display: "flex", gap: "10px" }}>
        <Link to={`cast`} state={{ from: location }}>
          Cast
        </Link>
        <Link to={`reviews`} state={{ from: location }}>
          Reviews
        </Link>
      </div>

      <Suspense fallback={<b>Loading data...</b>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
// MovieDetails.jsx
