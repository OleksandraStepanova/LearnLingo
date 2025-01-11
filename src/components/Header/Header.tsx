import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import UserAuth from '../UserAuth/UserAuth';
import css from './Header.module.css';

export default function Header() {
  return (
    <header className={css.header}>
      <Logo />
      <Navigation />
      <UserAuth />
    </header>
  );
}
