import { useState, useEffect } from "react";
import { fetchTrendingMovies } from "../fetch";
import { MoviesList } from "../components/MoviesList";
// треба продумати як зробити саме для today (datenow або time window)

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        const fetchedData = await fetchTrendingMovies({
          abortController: controller,
        });
        setMovies(fetchedData.results);
      } catch (error) {
        if (error.code !== "ERR_CANCELED") {
          setError(error);
        }
      }
    }
    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {error && <p>Ooops, something went wrong</p>}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </div>
  );
}
