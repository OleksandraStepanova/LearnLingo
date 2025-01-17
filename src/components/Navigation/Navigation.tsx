import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={css.container}>
      <NavLink to="/" className={({isActive})=>isActive?css.active:css.a}>
        Home
      </NavLink>
      <NavLink to="/teachers" className={({isActive})=>isActive?css.active:css.a}>
        Teachers
      </NavLink>
    </nav>
  );
}
