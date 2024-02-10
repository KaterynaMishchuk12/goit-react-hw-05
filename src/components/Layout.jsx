import { Outlet, NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Layout.module.css";

export default function Layout() {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <>
      <header>
        <nav className={css.nav}>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
          <NavLink to="/movies" className={buildLinkClass}>
            Movies
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
// Layout.jsx

// .nav {
//   display: flex;
//   gap: 12px;
// }
// .link {
//   text-decoration: none;
// }
// .link:hover {
//   text-decoration: underline;
// }
// .active {
//   color: rgb(24, 148, 78);
// }
