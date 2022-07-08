import { Formik, Form } from "formik";
import React from "react";
import { SCHEMA_SIGN_IN } from "../../../utils/schemaValidation";
import WrappedInput from "../WrappedInput";
import styles from "./SignIn.module.scss";

const initialValues = { email: "", password: "" };
const SignIn = (props) => {
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
            <WrappedInput style={{ marginTop: "0.3em" }} name="email" placeholder="Email Address" />
            <WrappedInput style={{ marginTop: "0.3em" }} name="password" placeholder="Password" />
            <input className={styles.submit} type="submit" value="LOGIN" />
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignIn;
