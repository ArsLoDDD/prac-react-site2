import React from "react";
import styles from "./SignUpFormRadioText.module.scss";

const headingJoin = 'Join As a '

const SignUpFormRadioText = (props) => {
  const {headingName, spanTextJoin} = props
  return (
    <div className={styles.join}>
      <div className={styles.joinItems}>
        <input className={styles.joinRadio} name="join" type="radio" />
        <div className={styles.joinInerItems}>
          <h3>{headingJoin} {headingName}</h3>
          <span>
            {spanTextJoin}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUpFormRadioText;
