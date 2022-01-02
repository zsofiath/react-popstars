import { React } from "react";
import { Switch, Route } from "react-router-dom";

import Home from './components/Home'
import Artist from './components/Artist'

const Routes = () => {
    return (
        <Switch>
            <Route path={`${window.location.pathname}artist/:id`} component={Artist}></Route>
            <Route path={window.location.pathname} component={Home}></Route>
        </Switch>
    )
}
export default Routes;