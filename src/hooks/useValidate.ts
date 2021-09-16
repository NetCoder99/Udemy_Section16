import React, {useReducer} from "react";

// -----------------------------------------------------------------------------
export function isEmailValid(val: string) {
  let regEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regEmail.test(val);
}
export const isNotEmpty = (val: string) => {
  return val.trim() !== "";
};

// // -----------------------------------------------------------------------------
// const initState = {
//   value: '',
//   isTouched: false
// };
// const inputStateReducer = (state: any, action: any) => {
//   return inputStateReducer;
// };


// -----------------------------------------------------------------------------
export const useValidate = (validateFunction: any) => {
  //const [inpState, dispatch] = useReducer(inputStateReducer, initState);

  const [inpValue,   setInpValue]   = React.useState("");

  const onChangedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("useValidate.valueChangedHandler:" + event.target.id + ":" + event.target.value);
    setInpValue(event.target.value);
  };

  const onBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    console.log("useValidate.onBlurHandler:" + event.target.id + ":" + event.target.value);
    setInpValue(event.target.value);
  };

  const  isValid  = validateFunction(inpValue);

  return {inpValue, onChangedHandler, onBlurHandler, isValid};
};
