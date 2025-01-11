import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav>
      <NavLink to="/">
        <button>Home</button>
      </NavLink>
      <NavLink to="/teachers">
        <button>Teachers</button>
      </NavLink>
    </nav>
  );
}
