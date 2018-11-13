import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import routesUser from '../routes/routes-user';
import Navbar from './navbar/navbar';
import Footer from './footer/footer';

class RouteUser extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar/>
                    {this.loadRoute(routesUser)}
                    <Footer/>
                </div>
            </Router>
        );
    }

    loadRoute = (routes) => {
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