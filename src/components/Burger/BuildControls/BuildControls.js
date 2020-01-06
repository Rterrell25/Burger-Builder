import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Lettuce", type: "lettuce" },
  { label: "Tomato", type: "tomato" },
  { label: "Cheese", type: "cheese" },
  { label: "Bacon", type: "bacon" },
  { label: "Meat", type: "meat" },
  { label: "Ketchup", type: "ketchup" },
  { label: "Mustard", type: "mustard" },
  { label: "Mayo", type: "mayo" }
];

const BuildControls = props => (
  <div className={classes.BuildControls}>
    <div>
      Current Price: <strong>{props.price.toFixed(2)}</strong>
    </div>
    {controls.map(ctrl => (
      <BuildControl
        added={() => props.ingredientAdded(ctrl.type)}
        key={ctrl.label}
        label={ctrl.label}
        subtracted={() => props.ingredientSubtracted(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
        pur
      />
    ))}
    <button
      className={classes.OrderButton}
      disabled={!props.purchaseable}
      onClick={props.ordered}
    >
      Order Now
    </button>
  </div>
);
export default BuildControls;
