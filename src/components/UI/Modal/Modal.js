import React from "react";

import Backdrop from "../Backdrop/Backdrop";
import Aux from "../../../hoc/Aux1";

import classes from "./Modal.css";

const App = (props) => (
  <Aux>
    <Backdrop />
    <div
      className={classes.Modal}
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0",
      }}
    >
      {props.children}
    </div>
  </Aux>
);

export default App;
