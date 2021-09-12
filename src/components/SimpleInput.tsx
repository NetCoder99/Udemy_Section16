import { useState, useRef, FormEvent, MouseEventHandler } from "react";
import "./SimpleInput.css";

import AppButton from "./common/AppButton";
import AppInput from "./common/AppInput";

const SimpleInput: React.FC<{}> = (props) => {
  function timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay));
  }

  const inpStatusInit = {
    isLoading: false,
    hasError: false,
    message: "",
    firstName: "",
    lastName: "",
  };
  const [inpStatus, setInpStatus] = useState(inpStatusInit);

  const firstNameInputRef = useRef<HTMLInputElement>(null);
  const lastNameInputRef = useRef<HTMLInputElement>(null);

  const nameKeyStrokeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("SimpleInput.nameKeyStrokeHandler:" + event.target.value);
    const tmpStatus = { ...inpStatusInit };
    tmpStatus.firstName = event.target.value;
    setInpStatus(tmpStatus);
  };

  const buttonClickHandler: React.MouseEventHandler<HTMLButtonElement> = async (
    event
  ) => {
    event.preventDefault();
    const firstName = firstNameInputRef.current?.value ? firstNameInputRef.current?.value : '';
    const lastName  = lastNameInputRef.current?.value  ? lastNameInputRef.current?.value  : '';
    
    let tmpStatus = { ...inpStatusInit };
    tmpStatus.isLoading = true;
    tmpStatus.message = "Processing...";
    setInpStatus(tmpStatus);

    const textContent = event.currentTarget.textContent;
    const id = event.currentTarget.id;
    await timeout(500); //for 1 sec delay

    console.log(
      "SimpleInput.buttonClickHandler.button:" +
        firstNameInputRef.current?.value +
        ":" +
        textContent +
        ":" +
        id
    );
    tmpStatus = { ...inpStatusInit };
    tmpStatus.isLoading = false;
    tmpStatus.message = "Complete";
    setInpStatus(tmpStatus);
    console.log(
      "SimpleInput.buttonClickHandler.firstName:" +
        firstName +
        ":" +
        lastName
    );
  };

  const formSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    console.log(
      "SimpleInput.formSubmitHandler.firstName:" +
        firstNameInputRef.current?.value
    );
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <AppInput
        onChangeHandler={nameKeyStrokeHandler}
        labelText="First Name:"
        inputId="inpFirstName"
        inputClass="AppInput width8rem display-inline"
        labelClass="width6rem display-inline"
        ref={firstNameInputRef}
      />
      <AppInput
        onChangeHandler={nameKeyStrokeHandler}
        labelText="Last Name:"
        inputId="inpLastName"
        inputClass="AppInput width8rem display-inline"
        labelClass="width6rem display-inline"
        ref={lastNameInputRef}
      />
      <div className="box">
        <div>
          <span>{inpStatus.message}</span>
          {/* &nbsp;
          <span>Message 2</span> */}
        </div>
        <div>
          <AppButton
            onClick={buttonClickHandler}
            text="Submit 1"
            className="AppButton"
            id="Submit1"
            disabled={inpStatus.isLoading}
          />
          &nbsp;
          <AppButton
            onClick={buttonClickHandler}
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
