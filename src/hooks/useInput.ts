import React from "react";

export const useInput = () => {
  console.log("useInput");

  const [inpValue,   setInpValue]   = React.useState("");
  const [wasTouched, setWasTouched] = React.useState(false);

  const  isValid  = false;//validateFunction(inpValue);
  const  hasError = isValid && wasTouched;

  const valueValidate = (value: string) => {
    console.log("useInput.valueValidate:" + value);
  };

  const valueChangedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("useInput.valueChangedHandler:" + event.target.id + ":" + event.target.value);
    setInpValue(event.target.value);
  };

  const valueBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    console.log("useInput.valueBlurHandler:" + event.target.id + ":" + event.target.value);
    setWasTouched(true);
  };

  return { inpValue, hasError, valueChangedHandler, valueBlurHandler, valueValidate};
};

//export default useInput;
