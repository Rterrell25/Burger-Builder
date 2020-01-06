import React from "react";

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
      <button>Cancel</button>
      <button>Continue</button>
    </React.Fragment>
  );
}
