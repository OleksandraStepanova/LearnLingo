import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import css from './BookingForm.module.css';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';
import image1x from '../../img/teachers/janesmith.png';
import image2x from '../../img/teachers/janesmith@2x.png';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/system';

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
    reasons: Yup.string().required('Please select a reason'),
  });

  const handleSubmit = (values: BookingFormValues) => {
    console.log('Form data:', values);
    alert('Booking successful!');
    onClose();
  };

  const CustomRadio = styled(Radio)({
    '&.Mui-checked': {
      color: '#F4C550',
    },
  });

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
        {({ values, setFieldValue }) => (
          <Form className={css.form}>
            <div className={css.wrapperForm}>
              <div className={css.radioButtons}>
                <p className={css.titleCheckbox}>
                  {' '}
                  What is your main reason for learning English?
                </p>
                <Field name="reason">
                  {({ field }: { field: { value: string } }) => (
                    <RadioGroup
                      className={css.radioButtons}
                      {...field}
                      row
                      value={values.reasons}
                      onChange={e => setFieldValue('reasons', e.target.value)}
                      style={{ display: 'flex', flexDirection: 'column' }}
                    >
                      <FormControlLabel
                        value="Career and business"
                        control={<CustomRadio />}
                        label="Career and business"
                      />
                      <FormControlLabel
                        value="Lesson for kids"
                        control={<CustomRadio />}
                        label="Lesson for kids"
                      />
                      <FormControlLabel
                        value="Living abroad"
                        control={<CustomRadio />}
                        label="Living abroad"
                      />
                      <FormControlLabel
                        value="Exams and coursework"
                        control={<CustomRadio />}
                        label="Exams and coursework"
                      />
                      <FormControlLabel
                        value="Culture, travel or hobby"
                        control={<CustomRadio />}
                        label="Culture, travel or hobby"
                      />
                    </RadioGroup>
                  )}
                </Field>
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
