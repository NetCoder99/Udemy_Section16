import React, { FormEvent } from "react";
import "./SimpleInput.css";

import AppButton from "./common/AppButton";
import AppInput from "./common/AppInput";
import { useValidate } from "../hooks/useValidate";

const SimpleInput: React.FC<{}> = (props) => {
  function isEmail(val: string) {
    let regEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regEmail.test(val);
  }
  //const isEmpty = (val:string) => {
  //  return val.trim() === '';
  //}
  const isNotEmpty = (val: string) => {
    return val.trim() !== "";
  };

  const {
    inpValue: firstName,
    onChangedHandler: firstNameChangeHandler,
    onBlurHandler: firstNameBlurHandler,
    isValid: firstNameIsValid,
  } = useValidate(isNotEmpty);

  const {
    inpValue: lastName,
    onChangedHandler: lastNameChangeHandler,
    onBlurHandler: lastNameBlurHandler,
    isValid: lastNameIsValid,
  } = useValidate(isNotEmpty);

  const {
    inpValue: emailValue,
    onChangedHandler: emailChangeHandler,
    onBlurHandler: emailBlueHandler,
    isValid: emailIsValid,
  } = useValidate(isEmail);

  // //const {} = use
  // const inpStatusInit = {
  //   isLoading: false,
  //   hasError: false,
  //   message: "",
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   formIsValid: false,
  //   formWasTouched: false,
  // };

  const formIsValid = firstNameIsValid && lastNameIsValid && emailIsValid;
  const message = firstName + "," + lastName + "::" + emailValue;
  const formSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    console.log(
      "SimpleInput.formSubmitHandler:" +
        firstName +
        "," +
        lastName +
        "::" +
        emailValue
    );
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div>
        <AppInput
          onChangeHandler={firstNameChangeHandler}
          onBlurHandler={firstNameBlurHandler}
          labelText="First Name:"
          inputId="inpFirstName"
          inputClass={`${"AppInput width8rem display-inline"} ${
            !firstNameIsValid && "invalid"
          } `}
          labelClass="width6rem display-inline"
        />
        <AppInput
          onChangeHandler={lastNameChangeHandler}
          onBlurHandler={lastNameBlurHandler}
          labelText="Last Name:"
          inputId="inpLastName"
          inputClass={`${"AppInput width8rem display-inline"} ${
            !lastNameIsValid && "invalid"
          } `}
          labelClass="width6rem display-inline"
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
