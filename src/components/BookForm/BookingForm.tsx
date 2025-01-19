import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import css from './BookingForm.module.css';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';
import image1x from '../../img/teachers/janesmith.png';
import image2x from '../../img/teachers/janesmith@2x.png';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

interface BookingFormProps {
  onClose: () => void;
}

interface BookingFormValues {
  fullName: string;
  email: string;
  phone: string;
  reasons: string;
}

const BookingForm = ({ onClose }: BookingFormProps) => {
  const initialValues: BookingFormValues = {
    fullName: '',
    email: '',
    phone: '',
    reasons: '',
  };

  const validationSchema = Yup.object({
    fullName: Yup.string()
      .required('Full name is required')
      .min(2, 'The name must contain at least 2 characters'),
    email: Yup.string().email('Incorrect email').required('Email required'),
    phone: Yup.string()
      .required('Phone number required')
      .min(11, 'Phone number must contain at least 11 characters'),
    reason: Yup.string().required('Please select a reason'),
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
      <div className={css.avatar}>
        <ResponsiveImage image1x={image1x} image2x={image2x} size={44} />
        <div>
          <p>Your teacher</p>
          <h2>Jane Smith</h2>
        </div>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className={css.form}>
            <div className={css.wrapperForm}>
              <div className={css.radioButtons}>
                <p className={css.titleCheckbox}>
                  {' '}
                  What is your main reason for learning English?
                </p>
                

                <div className={css.radioWrapper}>
                  <Field
                    type="radio"
                    name="reason"
                    value="Career and business"
                    className={css.radio}
                    id="career"
                  />
                  <label htmlFor="career">
                    <span className={css.radioLabel}></span>
                    Career and business
                  </label>
                </div>
                <div className={css.radioWrapper}>
                  <Field
                    type="radio"
                    name="reason"
                    value="Lesson for kids"
                    className={css.radio}
                    id="lesson"
                  />
                  <label htmlFor="lesson">
                    <span className={css.radioLabel}></span>
                    Lesson for kids
                  </label>
                </div>

                <div className={css.radioWrapper}>
                  <Field
                    type="radio"
                    name="reason"
                    value="Living abroad"
                    className={css.radio}
                    id="abroad"
                  />
                  <label htmlFor="abroad">
                    <span className={css.radioLabel}></span>
                    Living abroad
                  </label>
                </div>

                <div className={css.radioWrapper}>
                  <Field
                    type="radio"
                    name="reason"
                    value="Exams and coursework"
                    className={css.radio}
                    id="exams"
                  />
                  <label htmlFor="exams">
                    <span className={css.radioLabel}></span>
                    Exams and coursework
                  </label>
                </div>

                <div className={css.radioWrapper}>
                  <Field
                    type="radio"
                    name="reason"
                    value="Culture, travel or hobby"
                    className={css.radio}
                    id="hobby"
                  />
                  <label htmlFor="hobby">
                    <span className={css.radioLabel}></span>
                    Culture, travel or hobby
                  </label>
                </div>
                <ErrorMessage
                  name="reason"
                  component="div"
                  className={css.error}
                />
              </div>
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
