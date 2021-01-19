/* eslint-disable no-unused-expressions */
import React from "react";

import Aux from "../../../hoc/Aux1";
import Button from "../../UI/Button/Button";

const App = (props) => {
  const element = Object.keys(props.ingredients).map((e) => {
    return (
      <li key={e}>
        <span>{e}</span>: {props.ingredients[e]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <ul>
        {element}
      </ul>
      <p>
        <strong>Total Price: </strong>
        {props.price}
      </p>
      <p>Continue to Checkout</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default App;
