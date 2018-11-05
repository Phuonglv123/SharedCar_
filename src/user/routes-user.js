import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import HomePage from './home_page/home_page';
import routesUser from '../routes/routes-user';

class RouteUser extends Component {
    render() {
        return (
            <Router>
                <div>
                    {this.loadRoute(routesUser)}
                </div>
            </Router>
        );
    }

    loadRoute = (routes) => {
        console.log(routes);
        let result = null;
        if(routes.length > 1){
            result = routes.map((route,i) => {
                return <Route
                    key={i}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                />
            })
        }
        return result;
    }
}

export default RouteUser;