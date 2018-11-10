import React, {Component} from 'react';
import '../navbar/navbar.scss';

// component
import ButtonResponsive from './button-responsive';
import NavbarLink from './navbar-link';

class Navbar extends Component {

    render() {
        return (
            <nav id="myNavbar" className="navbar mt-3">
                <div className="container">                    

                    {/* Toggler/collapsibe Button */}
                    <ButtonResponsive/>

                    {/* Navbar links */}
                    <NavbarLink/>

                </div>
            </nav>
        );
    }
}

export default Navbar;