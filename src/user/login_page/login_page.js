import React, {Component} from 'react';
import './login_page.scss';

import { NavLink } from 'react-router-dom';

class LoginPage extends Component {


    autoScrollDiv = (iddiv) => {
        $('html,body').animate({
            scrollTop: $(`#${iddiv}`).offset().top},
            'slow');
    }

    componentDidMount = () => {
        this.autoScrollDiv("LoginPage");
    }

    componentDidUpdate = () => {
        this.autoScrollDiv("LoginPage")
    }

    render() {
        return (
            <section id="LoginPage">
                <div className="myForm">
                    <div className="bg_login">
                        <h1 className="text-center title_register">Login</h1>
                        <p className="m-0 title_signup">Do you not have an account?
                            <NavLink to="/register" className="login ml-2">
                                Register Now
                            </NavLink>
                        </p>

                        <form className="formLogin">
                            <div className="group">
                              <input type="text" name="username" required/>
                              <label className="label">Username</label>
                              <div className="bar"></div>
                            </div>

                            <div className="group">
                              <input type="text" name="username" required/>
                              <label className="label">Password</label>
                              <div className="bar"></div>
                            </div>
                            <div className="text-center">
                                <button className="loginnow myBtn" type="submit">Login</button>
                            </div>
                        </form>

                    </div>
                </div>
            </section>
        );
    }
}

export default LoginPage;