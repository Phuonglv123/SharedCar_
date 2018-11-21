import React, {Component} from 'react';
import './navigationStep.scss'

class NavigationStep extends Component {
    render() {
        return (
            <div id="navigatorStep">
                 <div className="container">
                <ul className="nav nav-tabs tab-trips">
                    <li className="nav-item navitem-trips">
                        <a className="nav-link navlink-trips text-center active" data-toggle="tab" href="#tab1">
                            <span className="stt-trips">1</span>
                            <span className="title-nav">Choose trips</span>
                        </a>
                    </li>
                    <li className="nav-item navitem-trips">
                        <a className="nav-link navlink-trips text-center" data-toggle="tab" href="#tab2">
                            <span className="stt-trips">2</span>
                            <span className="title-nav">Detail trip</span>
                        </a>
                    </li>
                    <li className="nav-item navitem-trips">
                        <a className="nav-link navlink-trips" data-toggle="tab" href="#tab3">
                            <span className="stt-trips">3</span>
                            <span className="title-nav">Payment</span>
                        </a>
                    </li>
                </ul>
            </div>
            </div>
           
        );
    }
}

export default NavigationStep;