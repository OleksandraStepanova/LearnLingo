import { NavLink } from 'react-router-dom';
import css from './UserAuth.module.css';
import { CiLogin } from 'react-icons/ci';

export default function UserAuth() {
  return (
    <div className={css.container}>
      <NavLink className={css.wrapper} to="/login">
        <CiLogin className={css.icon} />
        <p className={css.link}>Log In</p>
      </NavLink>
      <NavLink to={'/registration'} className={css.signIn}>
        <button className={css.button}>Registration</button>
      </NavLink>
    </div>
  );
}
