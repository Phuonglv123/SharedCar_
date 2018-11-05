import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import routesAdmin from '../routes/routes-admin';

class RouteAdmin extends Component {
    render() {
        return (
            <Router>
                <div>
                    {this.loadRoute(routesAdmin)}
                </div>
            </Router>
        );
    }

    loadRoute = (routes) => {
        let result = null;
        if(routes.length >= 1){
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

export default RouteAdmin;