import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated } from "./Auth";
import { Header, Home, Login, Management } from '../components';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                    <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
                )
        }
    />
);

const Routes = () =>{
    return(
        <div>
            <Header/>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact={true} component={Home}/>
                    <Route path="/login" component={Login}/>
                    <PrivateRoute path="/management" component={Management}/>
                </Switch>                
            </BrowserRouter>
        </div>        

    );
}

export default Routes;