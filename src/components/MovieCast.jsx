import { fetchCast } from "../fetch";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ErrorMessage } from "./ErrorMessage/ErrorMessage";
import { Loader } from "./Loader/Loader";

export const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(false);
        if (movieId) {
          const fetchedCast = await fetchCast(movieId);
          setCast(fetchedCast.cast);
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

      <p>cast info must be here</p>
      <ul>
        {cast.map((item) => (
          <li key={item.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
              alt={item.name}
            />
            <p>{item.name}</p>
            <p>Character: {item.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

// adult: false;
// cast_id: 5;
// character: "Willy Wonka";
// credit_id: "60abc25ac2b9df006c33cdb8";
// gender: 2;
// id: 1190668;
// known_for_department: "Acting";
// name: "Timothée Chalamet";
// order: 0;
// original_name: "Timothée Chalamet";
// popularity: 106.327;
// profile_path: "/BE2sdjpgsa2rNTFa66f7upkaOP.jpg";
