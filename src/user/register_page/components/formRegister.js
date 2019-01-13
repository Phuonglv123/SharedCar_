import React, {Component} from 'react';
import classnames from 'classnames';
import {connect} from 'react-redux';
import {registerPassenger} from "../../../actions/index";


class FormRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            confirmedpassword: "",
            fullname: "",
            phone: "",
            // gender: "",
            birthday: "",
            errors: {},
        }
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        let {username, password, confirmedpassword, fullname, phone, birthday, } = this.state;
        const passenger = {
            username, password, confirmedpassword, fullname, phone, birthday
        }
        this.props.registerPassenger(passenger);
    };

    render() {
        const {errors} = this.props;
        return (
            <form className="formRegister" onSubmit={this.onSubmit}>
                <div className="group">
                    <input type="text" name="username" required="required" onChange={this.onChange}/>
                    <label className="label">Username</label>
                    <div className="bar"></div>
                </div>

                <div className="group">
                    <input type="text" name="password" required="required" onChange={this.onChange}/>
                    <label className="label">Password</label>
                    <div className="bar"></div>
                </div>

                <div className="group">
                    <input type="text" name="confirmedpassword" required="required" onChange={this.onChange}/>
                    <label className="label">Re-Password</label>
                    <div className="bar"></div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="group">
                            <input type="text" name="fullname" required="required" onChange={this.onChange}/>
                            <label className="label">First name</label>
                            <div className="bar"></div>
                        </div>
                    </div>
                    {/*<div className="col-md-6">*/}
                        {/*<div className="group">*/}
                            {/*<input type="text" name="lastname" required="required" onChange={this.onChange}/>*/}
                            {/*<label className="label">Last name</label>*/}
                            {/*<div className="bar"></div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    <div className="col-md-6">
                        <div className="group">
                            <input type="text" name="phone" required="required" onChange={this.onChange}/>
                            <label className="label">Phone</label>
                            <div className="bar"></div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="group">
                            <input type="text" name="birthday" required="required" onChange={this.onChange}/>
                            <label className="label">Birthday</label>
                            <div className="bar"></div>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <button className="registernow myBtn" type="submit">Register</button>
                </div>
            </form>
        );
    }
}

const mapStateToProp = (state) => {
    return {
        typeRegister: state.typeRegister,
        errors: state.errorsReducer,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        submitRes: (type) => {
            dispatch(actions.getType(type, 3))
        }
    }
}

export default connect(mapStateToProp, {registerPassenger})(FormRegister);