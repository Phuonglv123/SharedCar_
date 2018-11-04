import React, {Component} from 'react';
import '../navbar/navbar.scss';

// component
import ButtonResponsive from './button-responsive';
import NavbarLink from './navbar-link';

class Navbar extends Component {

    render() {
        return (
            <nav id="myNavbar" className="navbar navbar-expand-lg mt-3">
                <div className="container">

                    {/* Logo */}
                    <div className="myLogo">
                        <div
                            className="logo"
                            alt="myLogo">
                            <h4 className="name_company text-center">CYB</h4>
                        </div>
                    </div>

                    {/* Toggler/collapsibe Button */}
                    <div
                        id="navresponsive"
                        className="navbar-toggler"
                        data-toggle="collapse"
                    >
                        <ButtonResponsive/>
                    </div>

                    {/* Navbar links */}
                    <NavbarLink/>

                </div>
            </nav>

        );
    }
}

export default Navbar;