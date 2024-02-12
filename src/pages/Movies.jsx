import { useSearchParams, useLocation, Link } from "react-router-dom";
import { SearchForm } from "../components/SearchForm/SearchForm";
import { fetchMovies } from "../fetch";
import { useState } from "react";
import { Loader } from "../components/Loader/Loader";
import { ErrorMessage } from "../components/ErrorMessage/ErrorMessage";
import css from "./Movies.module.css";

export default function Movies() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);
  const [params, setParams] = useSearchParams();
  const search = params.get("query") ?? "";
  const location = useLocation();

  const searchMovie = async (query) => {
    try {
      setLoading(true);
      const fetchedMovies = await fetchMovies(query);
      setMovies(fetchedMovies.results);
      const nextParams = query !== "" ? { query } : {};
      setParams(nextParams);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchForm value={search} onSearch={searchMovie} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <div>
        {movies.map((movie) => (
          <Link key={movie.id} to={`${movie.id}`} state={{ from: location }}>
            <li className={css.item}>
              <div className={css.box}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  width="120"
                  height="180"
                />
                <h3>{movie.title}</h3>
              </div>
            </li>
          </Link>
        ))}
      </div>
    </div>
  );
}
