import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import css from './LoginForm.module.css'

interface RegistrationModal {
  onClose: () => void;
}

interface RegistrationFormValues {
  email: string;
  password: string;
}

const RegistrationForm = ({ onClose }: RegistrationModal) => {
    const initialValues: RegistrationFormValues = {
        email: '',
        password: '',
      };
    
      const validationSchema = Yup.object({
        email: Yup.string()
          .email('Incorrect email')
          .required('Email required'),
        password: Yup.string()
          .required('Password required')
          .min(6, 'Password must contain at least 6 characters'),
      });
    
    const handleSubmit = (values: RegistrationFormValues) => {
        console.log('Form data:', values);
      alert('Login successful!');
      onClose();
      };
  return (
    <div className={css.wrapper}>
          <h2 className={css.title}>Log In</h2>
          <p className={css.text}>
            Welcome back! Please enter your credentials to access your account and continue your search for an teacher.
          </p>
          <Formik initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}>
            {() => (
              <Form className={css.form}>
                <div className={css.wrapperForm}>
                                    <div>
                    <Field type='text' name='email' placeholder='Email' className={css.input} />
                    <ErrorMessage name="email" component="div" className="error" />
                  </div>
                  <div>
                    <Field type='text' name='password' placeholder='Password' className={css.input} />
                    <ErrorMessage name="password" component="div" className="error" />
                  </div>
                </div>
                <button type='submit'>Log In</button>
              </Form>
            )}
          </Formik>
        </div>
  )
}

export default RegistrationForm
