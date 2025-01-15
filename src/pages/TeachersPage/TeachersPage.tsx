import FiltersForSearch from '../../components/FiltersForSearch/FiltersForSearch';
import ResponsiveImage from '../../components/ResponsiveImage/ResponsiveImage';
import image1x from '../../img/teachers/janesmith.png';
import image2x from '../../img/teachers/janesmith@2x.png';
import css from './TeachersPage.module.css';
import { LuBookOpen } from 'react-icons/lu';
import { BsStarFill } from 'react-icons/bs';
import { CiHeart } from 'react-icons/ci';

export default function TeachersPage() {
  return (
    <main className={css.container}>
      <FiltersForSearch />
      <ul className={css.list}>
        <li>
          <div className={css.card}>
            <ResponsiveImage image1x={image1x} image2x={image2x} size={120} />
            <div>
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
                <button>Read more</button>
              </div>
              <div>
                <ul className={css.heshtegs}>
                  <li>#A1 Beginner</li>
                  <li>#A2 Elementary</li>
                  <li>#B1 Intermediate</li>
                  <li>#B2 Upper-Intermediate</li>
                </ul>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </main>
  );
}
