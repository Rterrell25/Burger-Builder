import React from "react";
import classes from "./Button.module.css";

export default function Button(props) {
  return (
    <button
      className={[classes.button, classes[props.btnType]].join(" ")}
      onCLick={props.clicked}
    >
      {props.children}
    </button>
  );
}
