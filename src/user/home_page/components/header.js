import React, { Component } from 'react';
import './header.scss';
// Parralax image
import Parallax from 'parallax-js'

// Components
import Navbar from '../components/navbar/navbar';


class Header extends Component {

    AnimationImage = () => {
        var scene2 = document.getElementById("home-header-illustration-group");
        var parallaxInstance =  new Parallax(scene2, {
            limitX:true,
            limitY:false,
        });
        parallaxInstance.limit(50,0);
    }

    componentDidMount = () => {
        this.AnimationImage();
    }

    render() {
        return (
            <header>
                <div id="home-header-illustration">
                    <div id="home-header-illustration-group">
                        <div data-depth="1.4" className="img4"/>
                        <div data-depth="1.2" className="img3"/>
                        <div data-depth="1.0" className="img1"/>
                        <div data-depth="0.8" className="img7"/>
                        <div data-depth="0.6" className="img8"/>
                        <div className="img2"/>
                        <div data-depth="0.4" className="img5"/>
                        <div data-depth="0.2" className="img6"/>
                    </div>
                </div>
                <Navbar/>

                <h1 className="slogan">
                    We ride together.
                </h1>
            </header>
        );
    }
}

export default Header;