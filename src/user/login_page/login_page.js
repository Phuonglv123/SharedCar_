import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loginAccount} from "../../actions/index";
import './login_page.scss';

import {NavLink} from 'react-router-dom';
import typeRegister from "../../reducers/typeRegister";

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errors: {}
        }
    }
    componentWillReceiveProps = (nextProps) =>{
        if (nextProps.auth.isAuthenticated){
            this.props.history.push('/')
        }
    }

    autoScrollDiv = (iddiv) => {
        $('html,body').animate({
                scrollTop: $(`#${iddiv}`).offset().top
            },
            'slow');
    };
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    componentDidMount = () => {
        this.autoScrollDiv("LoginPage");
    }

    componentDidUpdate = () => {
        this.autoScrollDiv("LoginPage")
    }
    onSubmit = (e) => {
        e.preventDefault();
        let {username, password} = this.state;
        const account = {
            username, password
        }

        this.props.loginAccount(account);

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

                        <form className="formLogin" onSubmit={this.onSubmit}>
                            <div className="group">
                                <input type="text" name="username" id="username" required onChange={this.onChange}/>
                                <label className="label">Username</label>
                                <div className="bar"></div>
                            </div>

                            <div className="group">
                                <input type="text" name="password" id="password" onChange={this.onChange} required/>
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

const mapStateToProps = (state)=>{
    return{
        auth: state.typeRegister,
        errors: state.errorsReducer

    }
}

export default connect(mapStateToProps, {loginAccount})(LoginPage);