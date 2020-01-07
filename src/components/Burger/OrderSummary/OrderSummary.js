import React from "react";
import Button from "../../UI/Button/Button";
export default function OrderSummary(props) {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <div key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {props.ingredients[igKey]}
      </div>
    );
  });
  return (
    <React.Fragment>
      <h3>Your Order</h3>
      <div>A delicious burger with the following ingredients:</div>
      <ul>{ingredientSummary}</ul>
      <p>Total Price: {props.prices.toFixed(2)}</p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCanceled}>
        Cancel
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>
        Continue
      </Button>
    </React.Fragment>
  );
}
