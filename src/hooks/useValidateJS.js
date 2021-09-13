import React from "react";
export const useValidateJS = (validateFunction) => {
  const [inpValue,   setInpValue]   = React.useState("");
  const  isValid  = validateFunction(inpValue);
  return {setInpValue, isValid};
};
