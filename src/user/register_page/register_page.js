import React, { Component } from 'react';
import './register_page.scss'
import { NavLink } from 'react-router-dom';
import Who from './components/who';
import { connect } from 'react-redux';
import FormRegister from './components/formRegister';
import FinishReg from './components/finishReg';

class RegisterPage extends Component {

    disableClick = (val) => {
        let navlink = $(".nav-link");
        if(val){
            $(val).removeAttr("data-toggle");
            $(val).removeAttr("href");
        } else {
            navlink.map((i,val) => {
                $(val).removeAttr("data-toggle");
                $(val).removeAttr("href");
            })
        }
      
    }

    enableClick = () => {
        let navlink = $(".nav-link");
        if(this.props.typeUser.step === 2){
            navlink.map((i,val) => {
                if(i === this.props.typeUser.step - 1){
                    $(val).attr("data-toggle","tab");
                    $(val).attr("href","#menu2");
                    $(val).trigger("click");
                    this.autoScrollDiv("divregister");
                }
            })
        } else if(this.props.typeUser.step === 3) {
            navlink.map((i,val) => {
                if(i === this.props.typeUser.step - 1){
                    $(val).attr("data-toggle","tab");
                    $(val).attr("href","#menu3");
                    $(val).trigger("click");
                    this.autoScrollDiv("divregister");
                }
            })
        } else {
            return false;
        }
        
    }

    autoScrollDiv = (iddiv) => {
        $('html,body').animate({
            scrollTop: $(`#${iddiv}`).offset().top},
            'slow');
    }

    

    componentDidMount = () => {
        this.disableClick(null);
        this.autoScrollDiv("divregister");
    }

    componentDidUpdate = () => {
        this.enableClick();
        this.autoScrollDiv("divregister");
    }

    render() {

        return (
            <section id="Register">
                <div className="myForm">
                    <div className="bg_register" id="divregister">
                        <h1 className="text-center title_register">Register</h1>
                        <p className="m-0 title_signup">Do you have an account?
                            <NavLink to="/login" className="login ml-2">
                                Login Now
                            </NavLink>
                        </p>
                        {/* Progress */}
                        <ul className="nav nav-tabs tab-register d-flex justify-content-center">
                            <div>
                                <li className="nav-item active">
                                    <a className="nav-link navlink-register" data-toggle="tab" href="#menu1">
                                        <span className="stt">1</span>
                                    </a>
                                </li>
                            </div>
                            <div>
                                <li className="nav-item">
                                    <a className="nav-link navlink-register" data-toggle="tab" href="#menu2">
                                        <span className="stt linestt">2</span>
                                    </a>
                                </li>
                            </div>
                            <div>
                                <li className="nav-item">
                                    <a className="nav-link navlink-register" data-toggle="tab" href="#menu3">
                                        <span className="stt linestt">3</span>
                                    </a>
                                </li>
                            </div>
                        </ul>

                        {/* content */}
                        <div className="tab-content">
                            <div className="tab-pane container fade active show" id="menu1">
                                <Who/>
                            </div>

                            <div className="tab-pane container fade" id="menu2">
                                <FormRegister/>
                            </div>

                            <div className="tab-pane container fade" id="menu3">
                                <FinishReg/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProp = (state) => {
    return{
        typeUser: state.typeRegister
    }
}

export default connect(mapStateToProp,null)(RegisterPage);