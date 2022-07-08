import React from "react";
import styles from "./SigninButton.module.scss";

const SigninButton = (props) => {
  return (
    <div className={styles.headerSingUp}>
      <span className={styles.span}>SignIn</span>
    </div>
  );
};

export default SigninButton;