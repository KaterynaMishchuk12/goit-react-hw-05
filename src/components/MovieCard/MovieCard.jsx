// import { Suspense } from "react";
// import { Link, Outlet,  } from "react-router-dom";
// import css from "./MovieCard.module.css";
// import { Backlink } from "../Backlink/Backlink";

export const MovieCard = ({ movie }) => {
  // const location = useLocation();
  // const backLinkHref = location.state?.from ?? "/movies";

  if (!movie) {
    return null;
  }
  return (
    <div>
      {/* <Backlink to={backLinkHref}>Go back</Backlink> */}
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        width="300"
        height="440"
      />

      <h2>
        {movie.title} ({movie.release_date && movie.release_date.slice(0, 4)})
      </h2>
      <p>Rating: {movie.vote_average}</p>
      <h3>Overview</h3>

      <p>{movie.overview}</p>

      <h3>Additional information</h3>
      {/* <div className={css.nav}>
        <Link to={`cast`} state={{ from: location }}>
          Cast
        </Link>
        <Link to="reviews">Reviews</Link>
      </div>

      <Suspense fallback={<b>Loading data...</b>}>
        <Outlet />
      </Suspense> */}
    </div>
  );
};
// ./Moviecard.jsx
// adult: false;
// backdrop_path: "/3mpgltEMgPf8zFtPnAWdDVN8ZT1.jpg";
// genre_ids: (2)[(35, 18)];
// id: 1056360;
// media_type: "movie";
// original_language: "en";
// original_title: "American Fiction";
// overview: 'A novelist fed up with the establishment profiting from "Black" entertainment uses a pen name to write a book that propels him into the heart of hypocrisy and the madness he claims to disdain.';
// popularity: 89.205;
// poster_path: "/uzarZeVSU3h9ktg39tJmJ20dC6j.jpg";
// release_date: "2023-11-10";
// title: "American Fiction";
// video: false;
// vote_average: 7.364;
// vote_count: 77;
