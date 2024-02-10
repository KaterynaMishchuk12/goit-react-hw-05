// import { useSearchParams } from "react-router-dom";
// import { SearchForm } from "../components/SearchForm/SearchForm";
// import fetchMovies from "../fetch";
// import { useState } from "react";
// import { Loader } from "../components/Loader/Loader";
// import { ErrorMessage } from "../components/ErrorMessage/ErrorMessage";

// export default function Movies() {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [movies, setMovies] = useState([]);
//   const [params, setParams] = useSearchParams();
//   const search = params.get("query") ?? "";
//   // const location = useLocation;

//   const searchMovie = async (query) => {
//     try {
//       setLoading(true);
//       const fetchedMovies = await fetchMovies(query);
//       setMovies(fetchedMovies.results);
//     } catch (error) {
//       setError(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <SearchForm value={search} onChange={searchMovie} />
//       {loading && <Loader />}
//       {error && <ErrorMessage />}
//     </div>
//   );
// }
