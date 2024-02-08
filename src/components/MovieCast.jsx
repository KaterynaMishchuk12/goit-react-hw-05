import { fetchCast } from "../fetch";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ErrorMessage } from "./ErrorMessage/ErrorMessage";

export const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setError(false);
        if (movieId) {
          const fetchedCast = await fetchCast(movieId);
          setCast(fetchedCast.cast);
        }
      } catch (error) {
        setError(error.message);
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <div>
      {error && <ErrorMessage />}
      <p>{console.log(cast)}</p>
    </div>
  );
};
