import { ReactNode } from "react";
import { IoMdClose } from "react-icons/io";
import css from './Modal.module.css';

interface ModalProps {
    children: ReactNode;
    onClose: () => void;
}

const Modal = ({children, onClose}:ModalProps) => {
  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <button className={css.closeButton} onClick={onClose}>
          <IoMdClose size={32}/>
        </button>
        {children}       
      </div>
    </div>
  )
}

export default Modal


