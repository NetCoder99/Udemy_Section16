import React, { useState, useRef, FormEvent, useEffect } from "react";
import "./SimpleInput.css";

import AppButton from "./common/AppButton";
import AppInput from "./common/AppInput";

const SimpleInput: React.FC<{}> = (props) => {
  //function timeout(delay: number) {
  //  return new Promise((res) => setTimeout(res, delay));
  //}

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
  const formIsValid      = firstNameIsValid && lastNameIsValid;

  //const firstNameInputRef = useRef<HTMLInputElement>(null);
  //const lastNameInputRef = useRef<HTMLInputElement>(null);

  // useEffect(() => {
  //   const tmpStatus = { ...inpStatus };
  //   tmpStatus.formIsValid = firstNameIsValid && lastNameIsValid;
  //   setInpStatus(tmpStatus);
  // }, [firstNameIsValid, lastNameIsValid])


  const nameKeyStrokeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("SimpleInput.nameKeyStrokeHandler:" + event.target.value);
    const tmpStatus = { ...inpStatus };
    switch (event.currentTarget.id) {
      case "inpFirstName":
        tmpStatus.firstName = event.target.value;
        break;
      case "inpLastName":
        tmpStatus.lastName = event.target.value;
        break;
      default:
        break;
    }
    setInpStatus(tmpStatus);
  };

  const nameInputBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    console.log("SimpleInput.nameInputBlurHandler:" + event.target.id + ":" + event.target.value);
  };

  // const buttonClickHandler: React.MouseEventHandler<HTMLButtonElement> = async (
  //   event
  // ) => {
  //   event.preventDefault();

  //   let tmpStatus = { ...inpStatus };
  //   tmpStatus.isLoading = true;
  //   tmpStatus.message = "Processing...";
  //   setInpStatus(tmpStatus);

  //   const textContent = event.currentTarget.textContent;
  //   const id = event.currentTarget.id;
  //   await timeout(500); //for 1 sec delay

  //   console.log("SimpleInput.buttonClickHandler.button:" + textContent + ":" + id);
  //   tmpStatus = { ...inpStatusInit };
  //   tmpStatus.isLoading = false;
  //   tmpStatus.message = "Complete";
  //   setInpStatus(tmpStatus);
  //   console.log("SimpleInput.buttonClickHandler:" + inpStatus.firstName + ":" + inpStatus.lastName);
  // };

  const formSubmitHandler = (event: FormEvent) => {
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
      <AppInput
        onChangeHandler={nameKeyStrokeHandler}
        onBlurHandler={nameInputBlurHandler}
        labelText="Last Name:"
        inputId="inpLastName"
        inputClass={`${"AppInput width8rem display-inline"} ${!lastNameIsValid && "invalid"} `}
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
            disabled={inpStatus.isLoading
            }
          />
          &nbsp;
          <AppButton
            //onClick={buttonClickHandler}
            text="Submit 2"
            className="AppButton2"
            id="AppButton2"
            disabled={inpStatus.isLoading}
          />
        </div>
      </div>
    </form>
  );
};

export default SimpleInput;
