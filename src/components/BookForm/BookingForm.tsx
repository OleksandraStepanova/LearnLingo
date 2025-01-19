import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import css from './BookingForm.module.css';

interface BookingFormProps {
  onClose: () => void;
}

interface BookingFormValues {
  fullName: string;
  email: string;
  phone: string;
}

const BookingForm = ({ onClose }: BookingFormProps) => {
  const initialValues: BookingFormValues = {
    fullName: '',
    email: '',
    phone: '',
  };

  const validationSchema = Yup.object({
    fullName: Yup.string()
      .required('Full name is required')
      .min(2, 'The name must contain at least 2 characters'),
    email: Yup.string().email('Incorrect email').required('Email required'),
    phone: Yup.string()
      .required('Phone number required')
      .min(11, 'Phone number must contain at least 11 characters'),
  });

  const handleSubmit = (values: BookingFormValues) => {
    console.log('Form data:', values);
    alert('Booking successful!');
    onClose();
  };

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Book trial lesson</h2>
      <p className={css.text}>
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className={css.form}>
            <div className={css.wrapperForm}>
              <div>
                <Field
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  className={css.input}
                />
                <ErrorMessage
                  name="fullName"
                  component="div"
                  className={css.error}
                />
              </div>
              <div>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className={css.input}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className={css.error}
                />
              </div>
              <div>
                <Field
                  type="text"
                  name="phone"
                  placeholder="Phone number"
                  className={css.input}
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className={css.error}
                />
              </div>
            </div>
            <button type="submit">Sign Up</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookingForm;
