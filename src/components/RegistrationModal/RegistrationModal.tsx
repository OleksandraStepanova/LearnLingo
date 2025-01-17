import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import css from './RegistrationModal.module.css';

interface RegistrationModal {
  onClose: () => void;
}

interface RegistrationFormValues {
  name: string;
  email: string;
  password: string;
}

export default function RegistrationModal({ onClose }: RegistrationModal) {

  const initialValues: RegistrationFormValues = {
    name: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required('Name is required')
      .min(2, 'The name must contain at least 2 characters'),
    email: Yup.string()
      .email('Incorrect email')
      .required('Email required'),
    password: Yup.string()
      .required('Password required')
      .min(6, 'Password must contain at least 6 characters'),
  });

const handleSubmit = (values: RegistrationFormValues) => {
    console.log('Form data:', values);
    alert('Registration successful!');
  };


  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <button className={css.closeButton} onClick={onClose}>
          ×
        </button>
        <div className={css.wrapper}>
          <h2 className={css.title}>Registration</h2>
          <p className={css.text}>
            Thank you for your interest in our platform! In order to register,
            we need some information. Please provide us with the following
            information
          </p>
          <Formik initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}>
            {() => (
              <Form>
                <div>
                  <Field type='text' name='name' placeholder='Name' />
                  <ErrorMessage name="name" component="div" className="error" />
                </div>
                <div>
                  <Field type='text' name='email' placeholder='Email' />
                  <ErrorMessage name="email" component="div" className="error" />
                </div>
                <div>
                  <Field type='text' name='password' placeholder='Password' />
                  <ErrorMessage name="password" component="div" className="error" />
                </div>
                <button type='submit'>Sign Up</button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

