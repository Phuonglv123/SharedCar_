import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions/index';


class FormRegister extends Component {


    onSubmit = (e) => {
        e.preventDefault();
        this.props.submitRes(this.props.typeRegister.type);
    }

    render() {
        return (
            <form className="formRegister" onSubmit={this.onSubmit}>
                <div className="group">
                    <input type="text" name="username" required="required"/>
                    <label className="label">Username</label>
                    <div className="bar"></div>
                </div>

                <div className="group">
                    <input type="text" name="password" required="required"/>
                    <label className="label">Password</label>
                    <div className="bar"></div>
                </div>

                <div className="group">
                    <input type="text" name="repass" required="required"/>
                    <label className="label">Re-Password</label>
                    <div className="bar"></div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="group">
                            <input type="text" name="firstname" required="required"/>
                            <label className="label">First name</label>
                            <div className="bar"></div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="group">
                            <input type="text" name="lastname" required="required"/>
                            <label className="label">Last name</label>
                            <div className="bar"></div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="group">
                            <input type="text" name="phone" required="required"/>
                            <label className="label">Phone</label>
                            <div className="bar"></div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="group">
                            <input type="text" name="birthday" required="required"/>
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
    return{
        typeRegister: state.typeRegister
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        submitRes: (type) => {
            dispatch(actions.getType(type,3))
        }
    }
}

export default connect(mapStateToProp,mapDispatchToProps)(FormRegister);