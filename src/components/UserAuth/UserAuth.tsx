import { NavLink } from 'react-router-dom';
import css from './UserAuth.module.css';

export default function UserAuth() {
  return (
    <div>
      <NavLink to={'/registration'} className={css.signIn}>
        <button className={css.button}>Registration</button>
      </NavLink>
    </div>
  );
}
