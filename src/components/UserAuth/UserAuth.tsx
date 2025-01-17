import { NavLink } from 'react-router-dom';
import css from './UserAuth.module.css';
import { CiLogin } from 'react-icons/ci';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import RegistrationForm from '../RegistrationForm/RegistrationForm';

const UserAuth: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={css.container}>
      <NavLink className={css.wrapper} to="/login">
        <CiLogin className={css.icon} />
        <p className={css.link}>Log In</p>
      </NavLink>
      <button className={css.button} onClick={openModal}>
        Registration
      </button>
      {isModalOpen && <Modal onClose={closeModal} children={<RegistrationForm onClose={closeModal}/> } />}
    </div>
  );
};

export default UserAuth;
