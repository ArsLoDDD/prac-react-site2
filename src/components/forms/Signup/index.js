import { Formik, Form } from "formik";
import React from "react";
import { SCHEMA_SIGN_UP } from "../../../utils/schemaValidation";
import WrappedInput from "../WrappedInput";
import styles from "./Signup.module.scss";

const initialValues = {
  fname: "",
  lname: "",
  dname: "",
  email: "",
  password: "",
  cpassword: "",
};
const Signup = (props) => {
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
              <div className={styles.join}>
                <div className={styles.joinItems}>
                  <input className={styles.joinRadio}  name="join" type="radio" />
                  <div className={styles.joinInerItems}>
                    <h3>Join As a Buyer</h3>
                    <span>
                      I am looking for a Name, Logo or Tagline for my business,
                      brand or product.
                    </span>
                  </div>
                </div>
                <div className={styles.joinItems}>
                  <input className={styles.joinRadio} name="join" type="radio" />
                  <div className={styles.joinInerItems}>
                    <h3>Join As a Creative or Marketplace Seller</h3>
                    <span>
                      I plan to submit name ideas, Logo designs or sell names in
                      Domain Marketplace.
                    </span>
                  </div>
                </div>
              </div>
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

export default Signup;
