import React from 'react';
import Aux from "../../../hoc/Aux1";

import classes from './SideDrawer.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'

const App = props => {
    let attached = [classes.SideDrawer, classes.Close]
    if (props.open) {
        attached = [classes.SideDrawer, classes.open]
    }

    return(
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attached.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>

            </div>
        </Aux>
    )
}

export default App