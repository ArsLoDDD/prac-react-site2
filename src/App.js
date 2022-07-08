import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./page/Home";
// import Signup from './components/Header/Signupbutton/index';
import SignIn from "./components/forms/SignIn/index";
import Signup from "./components/forms/Signup/index";
import { cx } from "classnames";

const App = (props) => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <p>test</p>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

// const SignUp = () => <selection>SignUp</selection>;
export default App;
