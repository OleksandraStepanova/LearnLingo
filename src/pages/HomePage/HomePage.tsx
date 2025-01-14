import { useNavigate } from 'react-router-dom';
import css from './HomePage.module.css';
import ResponsiveImage from '../../components/ResponsiveImage/ResponsiveImage';
import image1x from '../../img/home.png';
import image2x from '../../img/home@2x.png';
import Footer from '../../components/Footer/Footer';

export default function HomePage() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/teachers');
  };

  return (
    <main>
      <section className={css.container}>
        <div className={css.wrapper}>
          <h1 className={css.title}>
            Unlock your potential with the best{' '}
            <span className={css.span}>language</span> tutors
          </h1>
          <p className={css.text}>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </p>
          <a className={css.navigate} onClick={handleButtonClick}>
            Get started
          </a>
        </div>
        <div>
          <ResponsiveImage image1x={image1x} image2x={image2x} size={568} />
        </div>
      </section>
      <Footer />
    </main>
  );
}
