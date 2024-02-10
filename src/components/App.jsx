// import css from "./App.module.css";

import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./Layout";

// const Layout = lazy(() => import("./Layout"));
const Home = lazy(() => import("../pages/Home"));
const Movies = lazy(() => import("../pages/Movies"));
const MovieDetails = lazy(() => import("../pages/MovieDetails"));
const MovieCast = lazy(() => import("./MovieCast"));
const MovieReviews = lazy(() => import("./MovieReviews"));
const NotFound = lazy(() => import("../pages/NotFound"));

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />

          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
// App.jsx
// import NotFound from "../pages/NotFound";
// import Home from "../pages/Home";
// import Movies from "../pages/Movies";
// import MovieDetails from "../pages/MovieDetails";
// import { MovieCast } from "./MovieCast";
// import { MovieReviews } from "./MovieReviews";
