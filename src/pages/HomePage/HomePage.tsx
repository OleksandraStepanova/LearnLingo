import { useNavigate } from 'react-router-dom';
import css from './HomePage.module.css';

export default function HomePage() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/teachers');
  };
  return (
    <section>
      <h1 className={css.title}>
        Unlock your potential with the best <span>language </span>tutors
      </h1>
      <p>
        Embark on an Exciting Language Journey with Expert Language Tutors:
        Elevate your language proficiency to new heights by connecting with
        highly qualified and experienced tutors.
      </p>
      <a onClick={handleButtonClick}>Get started</a>
    </section>
  );
}
