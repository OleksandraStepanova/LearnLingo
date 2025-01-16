import FiltersForSearch from '../../components/FiltersForSearch/FiltersForSearch';
import TeachersList from '../../components/TeachersList/TeachersList';
import css from './TeachersPage.module.css';

export default function TeachersPage() {
  return (
    <main className={css.container}>
      <FiltersForSearch />
      <TeachersList />
    </main>
  );
}
