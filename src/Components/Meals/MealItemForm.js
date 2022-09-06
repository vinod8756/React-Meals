import classes from "./MealItemForm.module.css";
import { useRef, useState } from "react";
import Input from "../UI/Input";

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [isFormValid, setisFormValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = +amountInputRef.current.value;

    if (enteredAmount < 1 || enteredAmount > 5) {
      setisFormValid(false);
      return;
    }
    else{
      setisFormValid(true);
    }

    props.addItem(enteredAmount);
  };

  return (
    <form className={classes.form}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "2",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button id={props.id} onClick={submitHandler}>
        Add
      </button>
      {!isFormValid && <p>Please enter a valid Amount(1-5).</p>}
    </form>
  );
};

export default MealItemForm;
