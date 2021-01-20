import React from "react";

import Aux from "../../hoc/Aux1";
import classes from "./Layout.css";

import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class App extends React.Component {
  state = {
    showSideDrawer: false,
  };

  sideOpen = () => {
    this.setState((e) => {
      return { showSideDrawer: !e.showSideDrawer };
    });
  };

  render() {
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.sideOpen} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={() => this.setState({ showSideDrawer: false })}
        />

        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default App;
