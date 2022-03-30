import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './Containers/home/index'
import Users from './Containers/orders'

const Routes = () => {
    return(
        <Router>
            <Route exact path={'/'} component={Home} />
            <Route exact path={'/orders'} component={Users} />
        </Router>
    )
}

export default Routes