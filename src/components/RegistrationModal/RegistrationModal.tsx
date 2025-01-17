import { IoMdClose } from "react-icons/io";
import css from './RegistrationModal.module.css';
import RegistrationForm from "../RegistrationForm/RegistrationForm";

interface RegistrationModal {
  onClose: () => void;
}


export default function RegistrationModal({ onClose }: RegistrationModal) {
  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <button className={css.closeButton} onClick={onClose}>
          <IoMdClose size={32}/>
        </button>
        <RegistrationForm onClose={onClose}/>       
      </div>
    </div>
  );
}

