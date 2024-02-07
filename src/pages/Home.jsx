import { useState, useEffect } from "react";
import { fetchTrendingMovies } from "../fetch";
import { Link } from "react-router-dom";
import { MoviesList } from "../components/MoviesList";
// треба продумати як зробити саме для today (datenow або time window)

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedData = await fetchTrendingMovies();
        setMovies(fetchedData.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <MoviesList movies={movies} />
    </div>
  );
}

// <div>
//   <h1>Trending today</h1>
//   {movies.map((movie) => (
//     <Link key={movie.id} to={`/movies/${movie.id}`}>
//       {console.log(movie.title)}
//       <p>{movie.title}</p>
//     </Link>
//   ))}
// </div>;
