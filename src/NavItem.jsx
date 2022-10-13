import { NavLink } from 'react-router-dom';

export const NavItem = ({ title, to }) => (
  <li>
    <NavLink
      to={`/${to ?? title.toLowerCase()}`}
      className={({ isActive }) => (isActive ? 'active' : undefined)}
    >
      {title}
    </NavLink>
  </li>
);
