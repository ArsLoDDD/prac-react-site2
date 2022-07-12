import { Formik, Form } from "formik";
import React from "react";
import { SCHEMA_SIGN_IN } from "../../../../utils/schemaValidation";
import styles from "./SignInForm.module.scss";
import WrappedInput from '../../WrappedInput/index';

const initialValues = { email: "", password: "" };
const SignInForm = (props) => {
  const onSubmit = (value, formikbag) => {
    formikbag.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SCHEMA_SIGN_IN}
        onSubmit={onSubmit}
    >
      {(formikProps) => {
        return (
          <Form className={styles.form}>
            <h2 className={styles.hedingSignIn}>login to your account</h2>
            <WrappedInput name="email" placeholder="Email Address" />
            <WrappedInput type='password' name="password" placeholder="Password" />
            <input className={styles.submit} type="submit" value="LOGIN" />
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignInForm;
