import React, {Component} from 'react';
import './App.scss';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// Components
import routes from './routes/routes';

class App extends Component {

    render() {
        return (
            <Router>
                <div className="App">
                    {this.showRoutes(routes)}
                </div>
            </Router>
        );
    }

    showRoutes = (routes) => {
        console.log(routes);
        let result = null;
        if(routes.length > 0){
            result = routes.map((route,index) => {
                return (
                    <Route 
                        key={index}
                        path={route.path} 
                        exact={route.exact} 
                        component={route.main}
                    />
                );
            })
        }
        return result;
    }
}

export default App;