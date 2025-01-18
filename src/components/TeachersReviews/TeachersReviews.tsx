import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';
import image1x from '../../img/reviews/frank.png';
import image2x from '../../img/reviews/frank@2x.png';
import image1xa from '../../img/reviews/eva.png';
import image2xa from '../../img/reviews/eva@2x.png';
import { BsStarFill } from 'react-icons/bs';
import css from './TeachersReviews.module.css';

const TeachersReviews: React.FC = () => {
  return (
    <ul className={css.list}>
      <li>
        <div className={css.title}>
          <ResponsiveImage image1x={image1x} image2x={image2x} size={44} />
          <div>
            <p>Frank</p>
            <div className={css.rating}>
              <BsStarFill color=" #ffc531" />
              <p>4.0</p>
            </div>
          </div>
        </div>
        <p className={css.text}>
          Jane's lessons were very helpful. I made good progress.
        </p>
      </li>
      <li>
        <div className={css.title}>
          <ResponsiveImage image1x={image1xa} image2x={image2xa} size={44} />
          <div>
            <p>Eva</p>
            <div className={css.rating}>
              <BsStarFill color=" #ffc531" />
              <p>5.0</p>
            </div>
          </div>
        </div>
        <p className={css.text}>
          Jane is an amazing teacher! She is patient and supportive.{' '}
        </p>
      </li>
    </ul>
  );
};

export default TeachersReviews;
