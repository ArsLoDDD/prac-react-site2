import { Formik, Form } from "formik";
import React from "react";
import { SCHEMA_SIGN_UP } from "../../../../utils/schemaValidation";
import styles from "./SignUpForm.module.scss";
import WrappedInput from '../../WrappedInput/index';
import SignUpFormRadioText from './SignUpFormRadioText/index';

const initialValues = {
  fname: "",
  lname: "",
  dname: "",
  email: "",
  password: "",
  cpassword: "",
};
const SignUpForm = (props) => {
  const onSubmit = (value, formikbag) => {
    formikbag.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SCHEMA_SIGN_UP}
      onSubmit={onSubmit}
    >
      {(formikProps) => {
        return (
          <>
            <h2 className={styles.hedingSignUp}>CREATE AN ACCOUNT</h2>
            <p className={styles.hedingSignUp}>
              We always keep your name and email address private.
            </p>
            <Form className={styles.form}>
              <WrappedInput name="fname" placeholder="First Name" />
              <WrappedInput name="lname" placeholder="Last Name" />
              <WrappedInput name="dname" placeholder="Display Name" />
              <WrappedInput name="email" placeholder="Email Address" />
              <WrappedInput name="password" placeholder="Password" />
              <WrappedInput
                name="cpassword"
                placeholder="Password Confirmation"
              />
             <SignUpFormRadioText/>
              <input
                className={styles.submit}
                type="submit"
                value="Create Account"
              />
            </Form>
          </>
        );
      }}
    </Formik>
  );
};

export default SignUpForm;
