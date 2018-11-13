import React, {Component} from 'react';

import './home_page.scss';
// Components
import Header from './components/header';
import DowloadApp from './components/dowloadApp';
import Features from './components/features';
import WhyChooseUs from './components/WhyChooseUs';
import MyEvent from './components/event';
import UseGuide from './components/UseGuide';

class HomePage extends Component {
    render() {
        return (
            <div>
                <div id="Header">
                    <Header/>
                </div>
                <Features/>
                <WhyChooseUs/>
                <MyEvent/>
                <UseGuide/>
                <DowloadApp/>
            </div>
           

        );
    }
}

export default HomePage;