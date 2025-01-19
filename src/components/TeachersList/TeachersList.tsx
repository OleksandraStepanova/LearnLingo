import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';
import image1x from '../../img/teachers/janesmith.png';
import image2x from '../../img/teachers/janesmith@2x.png';
import css from './TeachersList.module.css';
import { LuBookOpen } from 'react-icons/lu';
import { BsStarFill } from 'react-icons/bs';
import { CiHeart } from 'react-icons/ci';
import { useState } from 'react';
import TeachersReviews from '../TeachersReviews/TeachersReviews';
import BookingForm from '../BookForm/BookingForm';
import Modal from '../Modal/Modal';

const TeachersList: React.FC = () => {
  const [isReadMore, seIsReadMore] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openMore = () => seIsReadMore(true);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <ul className={css.list}>
      <li>
        <div className={css.card}>
          <ResponsiveImage image1x={image1x} image2x={image2x} size={120} />
          <div className={css.cardWrapper}>
            <div className={css.info}>
              <div className={css.name}>
                <p>Languages</p>
                <h2>Jane Smith</h2>
              </div>
              <div className={css.wrapper}>
                <ul className={css.table}>
                  <li>
                    <LuBookOpen />
                    <p>Lessons online</p>
                  </li>
                  <li>
                    <p>Lessons done: 1098</p>
                  </li>
                  <li>
                    <BsStarFill color=" #ffc531" />
                    <p>Rating: 4.8</p>
                  </li>
                  <li>
                    <p>
                      Price / 1 hour: <span>30$</span>
                    </p>
                  </li>
                </ul>
                <button className={css.favorites}>
                  <CiHeart size={26} />
                </button>
              </div>
            </div>
            <div className={css.text}>
              <ul className={css.textList}>
                <li>
                  <p>
                    Speaks: <span>German, French</span>
                  </p>
                </li>
                <li>
                  <p>
                    Lesson Info:{' '}
                    <span>
                      Lessons are structured to cover grammar, vocabulary, and
                      practical usage of the language.
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    Conditions:{' '}
                    <span>
                      Welcomes both adult learners and teenagers (13 years and
                      above).Provides personalized study plans
                    </span>
                  </p>
                </li>
              </ul>
              {isReadMore ? (
                <TeachersReviews />
              ) : (
                <button onClick={openMore}>Read more</button>
              )}
            </div>

            <div>
              <ul className={css.hashtags}>
                <li>#A1 Beginner</li>
                <li>#A2 Elementary</li>
                <li>#B1 Intermediate</li>
                <li>#B2 Upper-Intermediate</li>
              </ul>
            </div>

            {isReadMore && (
              <button className={css.bookButton} onClick={openModal}>
                Book trial lesson
              </button>
            )}

            {isModalOpen && (
              <Modal
                onClose={closeModal}
                children={<BookingForm onClose={closeModal} />}
              />
            )}
          </div>
        </div>
      </li>
    </ul>
  );
};

export default TeachersList;
