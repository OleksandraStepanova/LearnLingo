import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import { IoMdClose } from "react-icons/io";
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
  onClose();
  };


  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <button className={css.closeButton} onClick={onClose}>
          <IoMdClose size={32}/>
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
              <Form className={css.form}>
                <div className={css.wrapperForm}>
                  <div>
                    <Field type='text' name='name' placeholder='Name' className={css.input} />
                    <ErrorMessage name="name" component="div" className="error" />
                  </div>
                  <div>
                    <Field type='text' name='email' placeholder='Email' className={css.input} />
                    <ErrorMessage name="email" component="div" className="error" />
                  </div>
                  <div>
                    <Field type='text' name='password' placeholder='Password' className={css.input} />
                    <ErrorMessage name="password" component="div" className="error" />
                  </div>
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

