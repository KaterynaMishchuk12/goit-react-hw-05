import { useState, useEffect } from "react";
import { fetchTrendingMovies } from "../fetch";
import { MoviesList } from "../components/MoviesList";
import { ErrorMessage } from "../components/ErrorMessage/ErrorMessage";
// треба продумати як зробити саме для today (datenow або time window)
// аборт недопрацьований

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // const controller = new AbortController();

    async function fetchData() {
      try {
        const fetchedData = await fetchTrendingMovies({
          // abortController: controller,
        });
        setMovies(fetchedData.results);
      } catch (error) {
        if (error.code !== "ERR_CANCELED") {
          setError(error);
        }
      }
    }
    fetchData();

    // return () => {
    //   controller.abort();
    // };
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {error && <ErrorMessage />}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </div>
  );
}
