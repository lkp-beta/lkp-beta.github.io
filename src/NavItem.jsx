import { NavLink } from "react-router-dom";

export const NavItem = ({ title, to }) => (
  <li>
    <NavLink
      to={`/${to ?? title.toLowerCase()}`}
      className={({ isActive }) => (isActive && to !== "" ? "active" : undefined)}
    >
      {title}
    </NavLink>
  </li>
);
