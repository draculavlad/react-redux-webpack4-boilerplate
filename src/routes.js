import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home'

function Routes(props) {
    return (
        <Switch>
            <Route path="/home" component={Home} />
        </Switch>
    )
}

export default Routes