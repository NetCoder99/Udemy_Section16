import React from "react";
export const useValidate = (validateFunction: any) => {
  const [inpValue,   setInpValue]   = React.useState("");

  const onChangedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("useInput.valueChangedHandler:" + event.target.id + ":" + event.target.value);
    setInpValue(event.target.value);
  };

  const onBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    console.log("useInput.onBlurHandler:" + event.target.id + ":" + event.target.value);
    setInpValue(event.target.value);
  };

  const  isValid  = validateFunction(inpValue);

  return {inpValue, onChangedHandler, onBlurHandler, isValid};
};
