import React, {Component} from 'react';
import './button-responsive.scss';

// Components

class ButtonResponsive extends Component {


    //////// Button Menu Animation
    ButtonMenu = () => {
        var trigger = $('#hamburger'),
        isClosed = false;

        trigger.click(function () {
            burgerTime();
            $(".overplayMeny").toggleClass("openMenu");
            $(".burger-icon").toggleClass("bgMenu");
        });

        function burgerTime() {
            if (isClosed == true) {
                trigger.removeClass('is-open');
                trigger.addClass('is-closed');
                isClosed = false;
            } else {
                trigger.removeClass('is-closed');
                trigger.addClass('is-open');
                isClosed = true;
            }
        }
    }

    componentDidMount = () => {
        this.ButtonMenu();
    }

    render() {
        return (
            
                <div id="hamburger" className="hamburglar is-close">
                    <div className="burger-icon">
                        <div className="burger-container">
                            <span className="burger-bun-top"/>
                            <span className="burger-filling"/>
                            <span className="burger-bun-bot"/>
                        </div>
                    </div>
                    {/* svg ring containter */}
                    <div className="burger-ring">
                        <svg className="svg-ring">

                            <path
                                className="path"
                                fill="none"
                                stroke="#ffff"
                                strokeMiterlimit={10}
                                strokeWidth={4}
                                d="M 34 2 C 16.3 2 2 16.3 2 34 s 14.3 32 32 32 s 32 -14.3 32 -32 S 51.7 2 34 2"/>
                        </svg>
                    </div>
                    <svg width={0} height={0}>
                        <mask id="mask">
                            <path
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                stroke="#ff0000"
                                strokeMiterlimit={10}
                                strokeWidth={4}
                                d="M 34 2 c 11.6 0 21.8 6.2 27.4 15.5 c 2.9 4.8 5 16.5 -9.4 16.5 h -4"/>
                        </mask>
                    </svg>
                    <div className="path-burger">
                        <div className="animate-path">
                            <div className="path-rotation"/>
                        </div>
                    </div>
                </div>

        );
    }
}

export default ButtonResponsive;