import React, { useState } from "react";
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSuccess";
import "./Form.css";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="signup-form-container">
        <span className="close-btn">×</span>
        <div className="form-content-left">
          <img
            className="form-img"
            src="images/christmasTree.png"
            alt="spaceship"
          />
          {/* <img className="form-img" src="images/img-2.svg" alt="spaceship" /> */}
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
      <footer>All right is reserved.</footer>
    </>
  );
};

export default Form;
