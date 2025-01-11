import logo from '../../img/logo.svg';
import css from './Logo.module.css';

export default function Logo() {
  return (
    <div className={css.container}>
      <img src={logo} alt="logo" />
      <p>LearnLingo</p>
    </div>
  );
}
