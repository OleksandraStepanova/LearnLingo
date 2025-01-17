import { useState } from 'react';
import Modal from '../Modal/Modal';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import LoginForm from '../LoginForm/LoginForm';
import { CiLogin } from 'react-icons/ci';
import css from './UserAuth.module.css';


const UserAuth: React.FC = () => {
  const [isModalOpenSignin, setIsModalOpenSignin] = useState<boolean>(false);
  const [isModalOpenLogin, setIsModalOpenLogin] = useState<boolean>(false);

  const openModalSignin = () => setIsModalOpenSignin(true);
  const closeModalSignin = () => setIsModalOpenSignin(false);

  const openModalLogin = () => setIsModalOpenLogin(true);
  const closeModalLogin = () => setIsModalOpenLogin(false);

  return (
    <div className={css.container}>
      <div className={css.wrapper} >
        <CiLogin className={css.icon} />
        <a className={css.link} onClick={openModalLogin}>Log In</a>
      </div>
      <button className={css.button} onClick={openModalSignin}>
        Registration
      </button>
      {isModalOpenSignin && <Modal onClose={closeModalSignin} children={<RegistrationForm onClose={closeModalSignin} />} />}
      {isModalOpenLogin && <Modal onClose={closeModalLogin} children={<LoginForm onClose={closeModalLogin}/>} />}
    </div>
  );
};

export default UserAuth;
