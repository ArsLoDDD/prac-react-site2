import * as Yup from "yup";

export const SCHEMA_NAME = Yup.string()
  .matches(/^[A-Z][a-z]{1,20}$/, "Must be latin letter")
  .required('Invalid Name');

export const SCHEMA_DISPLAY_NAME = Yup.string()
  .matches(
    /^(?=.*[A-Za-z0-9]$)[A-Za-z][A-Za-z\d.-]{0,19}$/,
    "Must be latin letter"
  )
  .required('Invalid Login');

export const SCHEMA_EMAIL = Yup.string()
  .email("Enter correct email")
  .required('Invalid Email');

export const SCHEMA_PASSWORD = Yup.string()
  .matches(
    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    "Enter correct password"
  )
  .required('Invalid Password');

export const SCHEMA_SIGN_UP = Yup.object({
  fname: SCHEMA_NAME,
  lname: SCHEMA_NAME,
  dname: SCHEMA_DISPLAY_NAME,
  email: SCHEMA_EMAIL,
  password: SCHEMA_PASSWORD,
  cpassword: Yup.string().oneOf([Yup.ref('password')], 'Password not equel'),
});

export const SCHEMA_SIGN_IN = Yup.object({
  email: SCHEMA_EMAIL,
  password: SCHEMA_PASSWORD,
});
