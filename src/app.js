import React, {Component} from 'react';
import './App.scss';

// Components
import RoutesAdmin from './admin/routes-admin';
import RouteUser from './user/routes-user';
class App extends Component {

    render() {
        return (
                <div className="App">
                    {this.redirectPage(window.location.pathname)}
                </div>
        );
    }

    redirectPage = (pathname) => {
        switch (pathname) {
            case '/admin':
                return (
                    <RoutesAdmin/>
                )        
            default:
                return (
                    <RouteUser/>
                )    
        }
    }
}

export default App;