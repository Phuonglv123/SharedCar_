import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/index';

// component
import ButtonResponsive from './button-responsive';
import NavbarLink from './navbar-link';

// Scss
import '../navbar/navbar.scss';

class Navbar extends Component {

    changeColorNavbar = (path) => {
        if(path !== "/"){
            return (
                <nav id="myNavbar2" className="navbar changeColor">
                    <div className="container">
                        <ButtonResponsive/>
                        <NavbarLink/>
                    </div>
                </nav>
            )
        } else {
            return (
                <nav id="myNavbar" className="navbar">
                    <div className="container">
                        <ButtonResponsive/>
                        <NavbarLink/>
                    </div>
                </nav>
            )
        }
    }

    render() {
        return (
            <div>
                {this.changeColorNavbar(window.location.pathname)}
            </div>
        );
    }
}

export default Navbar;