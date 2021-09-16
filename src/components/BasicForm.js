import { useValidate, isNotEmpty } from "../hooks/useValidate";

const BasicForm = (props) => {
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

  return (
    <form>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="inpFirstName">First Name</label>
          <input
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            className={`${"AppInput width8rem display-inline"} ${!firstNameIsValid && "invalid"} `}
            type="text"
            id="inpFirstName"
          />
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            className={`${"AppInput width8rem display-inline"} ${!lastNameIsValid && "invalid"} `}
          />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
