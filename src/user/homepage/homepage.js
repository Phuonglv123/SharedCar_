import React, { Component } from 'react';
import './homepage.scss';
// Components
import Header from './header';

class HomePage extends Component {
    render() {
        return (
            <div id="HomePage">
                <Header/>
            </div>
        );
    }
}

export default HomePage;