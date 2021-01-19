/* eslint-disable no-unused-expressions */
import React from "react";

import classes from "./BuildControls";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Tomato", type: "tomato" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const App = (props) => (
  <div className={classes.BuildControls}>
    <p>
      Current Price: <strong>{props.price}</strong>
    </p>
    {controls.map(c => {
        <BuildControl 
        key={c.label}
        label={c.label}
        added={props.ingredientAdded}
        removed={props.ingredientRemoved}
        disabled={props.disabled[c.type]}
        />
    })}

    <button
      className={classes.OrderButton}
      disabled={props.purchasable}
      onClick={props.order}
    >
      ORDER NOW
    </button>
  </div>
);

export default App;
