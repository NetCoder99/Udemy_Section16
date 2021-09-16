import React from 'react';
import AppInput from "../common/AppInput";

interface Props {
  onChangedHandler: React.ChangeEventHandler<HTMLInputElement>,
  onBlurHandler: React.FocusEventHandler<HTMLInputElement>,
  isValid: boolean,
}
const LastNameInput: React.FC<Props> = (props: Props) => {
  return (
    <AppInput
      onChangeHandler={props.onChangedHandler}
      onBlurHandler={props.onBlurHandler}
      labelText="Last Name:"
      labelClass="width6rem display-inline"
      inputId="inpLastName"
      inputClass={`${"AppInput width8rem display-inline"} ${
        !props.isValid && "invalid"
      } `}
    />
  );
};
export default LastNameInput;
