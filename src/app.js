import React, {Component} from 'react';
import './App.scss';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// Components
import HomePage from './user/homepage/homepage';
import AdminPage from './admin/adminpage';


class App extends Component {

    render() {
        return (
            <Router>
                <div className="App">
                    <Route path="/" exact component={HomePage}/>
                    <Route path="/admin" exact component={AdminPage}/>
                </div>
            </Router>
        );
    }
}

export default App;