import React from "react";
import styles from "./Header.module.scss";
import Signupbutton from "./Signupbutton/index";
import { Link, useLocation } from "react-router-dom";
import SigninButton from './SigninButton/index';

const Header = (props) => {
  const pathName = useLocation();
  if (pathName.pathname === "/signin") {
    return (
      <div className={styles.flex}>
        <Link to="/">
          <img src="/static/images/logo.png" alt="logo" />
        </Link>
        <Link to="/signup" style={{ textDecoration: "none" }}>
          <Signupbutton />
        </Link>
      </div>
    );
  }else{
    return (
      <div className={styles.flex}>
        <Link to="/">
          <img src="/static/images/logo.png" alt="logo" />
        </Link>
        <Link to="/signin" style={{ textDecoration: "none" }}>
          <SigninButton />
        </Link>
      </div>
    );
  }

};

export default Header;
