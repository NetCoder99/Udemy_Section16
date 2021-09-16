import React, { useRef, FormEvent, useState } from "react";
import "./SimpleInput.css";

import AppButton from "./common/AppButton";
import AppInput from "./common/AppInput";
import { useValidate, isEmailValid, isNotEmpty } from "../hooks/useValidate";
import FirstNameInput  from "./inputFields/FirstNameInput";
import LastNameInput  from "./inputFields/LastNameInput";

const SimpleInput: React.FC<{}> = (props) => {
  const {
     inpValue: firstNameValue,
     onChangedHandler: firstNameChangeHandler,
     onBlurHandler: firstNameBlurHandler,
     isValid: firstNameIsValid,
  } = useValidate(isNotEmpty);

  const {
    inpValue: lastNameValue,
    onChangedHandler: lastNameChangeHandler,
    onBlurHandler: lastNameBlurHandler,
    isValid: lastNameIsValid,
  } = useValidate(isNotEmpty);

  const {
    inpValue: emailValue,
    onChangedHandler: emailChangeHandler,
    onBlurHandler: emailBlueHandler,
    isValid: emailIsValid,
  } = useValidate(isEmailValid);

  const formIsValid = firstNameIsValid && lastNameIsValid && emailIsValid;
  const message = firstNameValue && "," && lastNameValue + "::" + emailValue;

  const formSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    console.log(
      "SimpleInput.formSubmitHandler:" +
        firstNameValue +
        "," +
        lastNameValue +
        "::" +
        emailValue
    );
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="box">
        <FirstNameInput 
          onBlurHandler={firstNameBlurHandler}
          onChangedHandler={firstNameChangeHandler}
          isValid={firstNameIsValid}
        /> 
        <LastNameInput 
          onBlurHandler={lastNameBlurHandler}
          onChangedHandler={lastNameChangeHandler}
          isValid={lastNameIsValid}
        /> 
      </div>
      <AppInput
        onChangeHandler={emailChangeHandler}
        onBlurHandler={emailBlueHandler}
        labelText="Email Addr:"
        inputId="inpEmailAddr"
        inputClass={`${"AppInput width10rem display-inline"} ${
          !emailIsValid && "invalid"
        } `}
        labelClass="width6rem display-inline"
      />
      <div className="box">
        <div>
          <span className={`${formIsValid ? "success-text" : "error-text"}`}>
            {message}
          </span>
        </div>
        <div>
          <AppButton
            //onClick={buttonClickHandler}
            text="Submit 1"
            className="AppButton"
            id="Submit1"
            disabled={!formIsValid}
          />
        </div>
      </div>
    </form>
  );
};

export default SimpleInput;
