import css from './FiltersForSearch.module.css';
import { Field, Form, Formik } from 'formik';

export default function FiltersForSearch() {
  return (
    <section>
      <Formik
        initialValues={{
          languages: '',
        }}
        onSubmit={values => {
          console.log(values);
        }}
      >
        {() => (
          <Form className={css.form}>
            <div className={css.item}>
              <label htmlFor="languages">Languages</label>
              <Field className={css.input} as="select" name="languages">
                <option>French</option>
              </Field>
            </div>
            <div className={css.item}>
              <label htmlFor="languages">Level of knowledge</label>
              <Field className={css.input} as="select" name="languages">
                <option>A1 Beginner</option>
              </Field>
            </div>
            <div className={css.item}>
              <label htmlFor="languages">Price</label>
              <Field className={css.input} as="select" name="languages">
                <option>30 $</option>
              </Field>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
}
