import React from "react";
import classes from "./Input.module.css";

export default function Input(props) {
  console.log(props);
  let inputElement = null;
  switch (props.inputype) {
    case "input":
      inputElement = <input className={classes.inputElement} {...props} />;

      break;
    case "textarea":
      inputElement = <textarea className={classes.inputElement} {...props} />;
      break;
    default:
      inputElement = <input className={classes.inputElement} {...props} />;
  }
  return (
    <div className={classes.Input}>
      <label className={classes.Labels}>{props.label}</label>
      {inputElement}
    </div>
  );
}
