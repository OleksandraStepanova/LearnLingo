import css from './RegistrationModal.module.css';

interface RegistrationModal {
  onClose: () => void;
}

export default function RegistrationModal({ onClose }: RegistrationModal) {
  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <button className={css.closeButton} onClick={onClose}>
          ×
        </button>
        <div className={css.wrapper}>
          <h2 className={css.title}>Registration</h2>
          <p className={css.text}>
            Thank you for your interest in our platform! In order to register,
            we need some information. Please provide us with the following
            information
          </p>
        </div>
      </div>
    </div>
  );
}
