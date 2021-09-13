import React, { useState, useRef, FormEvent, useEffect } from "react";
import "./SimpleInput.css";

import AppButton from "./common/AppButton";
import AppInput  from "./common/AppInput";
import {useInput}  from '../hooks/useInput';
//import {useValidate}  from '../hooks/useValidateJS';

const SimpleInput = (props) => {
  function isEmail(val) {
    let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regEmail.test(val);
  }
  
  //const {} = use
  const inpStatusInit = {
    isLoading:  false,
    hasError:   false,
    message:    "",
    firstName:  "",
    lastName:   "",
    email:      "",
    formIsValid: false,
    formWasTouched: false,
  };

  const [inpStatus, setInpStatus] = useState(inpStatusInit);

  const firstNameIsValid = inpStatus.firstName.trim() !== '';
  const lastNameIsValid  = inpStatus.lastName.trim()  !== '';
  const emailAddrIsValid = isEmail(inpStatus.email.trim());

  const { 
    inpValue: emailValue, 
    hasError: emailError, 
    valueChangedHandler: emailChangedHandler, 
    valueBlurHandler: emailBlurHandler,
    //valueValidate: is
  } = useInput();

  //const {isValid: isValidEmail}      = useValidate(isEmail(inpStatus.email.trim()));
  //const {isValid: isValidFirstName}  = useValidate(inpStatus.firstName.trim() !== '');

  const nameKeyStrokeHandler = (event) => {
    console.log("SimpleInput.nameKeyStrokeHandler:" + event.target.value);
    const tmpStatus = { ...inpStatus };
    switch (event.currentTarget.id) {
      case "inpFirstName":
        tmpStatus.firstName = event.target.value;
        break;
      case "inpLastName":
        tmpStatus.lastName = event.target.value;
        break;
      case "inpEmailAddr":
        tmpStatus.email = event.target.value;
        break;
      default:
        break;
    }
    setInpStatus(tmpStatus);
  };

  const nameInputBlurHandler = (event) => {
    console.log("SimpleInput.nameInputBlurHandler:" + event.target.id + ":" + event.target.value);
    const tmpStatus = { ...inpStatus };
    tmpStatus.formIsValid = firstNameIsValid && lastNameIsValid && lastNameIsValid;
    if (tmpStatus.formIsValid) {
      tmpStatus.message = "Form was valid: " + inpStatus.firstName + "," + inpStatus.lastName;
    }
    else {
      tmpStatus.message = "Form was not valid!";
    }
    setInpStatus(tmpStatus);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log("SimpleInput.formSubmitHandler:" + inpStatus.firstName + "," + inpStatus.lastName);

    const tmpStatus = { ...inpStatus };
    if (inpStatus.formIsValid) {
      tmpStatus.message = "Form was valid: " + inpStatus.firstName + "," + inpStatus.lastName;
      setInpStatus(tmpStatus);
    }
    else {
      tmpStatus.message = "Form was not valid!";
      setInpStatus(tmpStatus);
    }
};

  return (
    <form onSubmit={formSubmitHandler}>
      <AppInput
        onChangeHandler={nameKeyStrokeHandler}
        onBlurHandler={nameInputBlurHandler}
        labelText="First Name:"
        inputId="inpFirstName"
        inputClass={`${"AppInput width8rem display-inline"} ${!firstNameIsValid && "invalid"} `}
        labelClass="width6rem display-inline"
      />
      <div className="box">
        <div>
          <span className={`${inpStatus.formIsValid ? "success-text" : "error-text"}`}>{inpStatus.message}</span>
        </div>
        <div>
          <AppButton
            //onClick={buttonClickHandler}
            text="Submit 1"
            className="AppButton"
            id="Submit1"
            disabled={!inpStatus.formIsValid}
          />
        </div>
      </div>
    </form>
  );
};

export default SimpleInput;
