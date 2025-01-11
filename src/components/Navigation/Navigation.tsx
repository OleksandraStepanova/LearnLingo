import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav>
      <NavLink to="/">
        <button className={css.link}>Home</button>
      </NavLink>
      <NavLink to="/teachers">
        <button className={css.link}>Teachers</button>
      </NavLink>
    </nav>
  );
}
