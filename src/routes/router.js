import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { HomeView } from '../view/homeView';
import { SignInView } from '../view/singInView';
import { MySky } from '../view/sky';
import '../shared/global/global.css';

export const Routing = (props) => {
    return(
        <Router>
            {props.children}
            <Switch>
                <Route exact path="/SKy" component={ MySky } />
                <Route exact path="/signin" component={ SignInView } />
                <Route component={ HomeView }/>
            </Switch>
        </Router>
    )
}