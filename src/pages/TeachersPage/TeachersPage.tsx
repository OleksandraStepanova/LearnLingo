import FiltersForSearch from '../../components/FiltersForSearch/FiltersForSearch';
import ResponsiveImage from '../../components/ResponsiveImage/ResponsiveImage';
import image1x from '../../img/teachers/janesmith.png';
import image2x from '../../img/teachers/janesmith@2x.png';
import css from './TeachersPage.module.css';
import { LuBookOpen } from 'react-icons/lu';
import { BsStarFill } from 'react-icons/bs';

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
                      <p>Price / 1 hour: <span>30$</span></p>
                    </li>
                  </ul>
                  <button>+</button>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </main>
  );
}
