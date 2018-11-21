import React, {Component} from 'react';
import * as actions from '../../../actions/index';
import { connect } from 'react-redux';


import './who.scss'


class Who extends Component {

    getTypeUser = (type,step) => {
        this.props.getTypeUser(type,step);
    }

    render() {
        return (
            <div className="row who">
                <div className="col-md-6">
                    <div className="linkClick" onClick={() => this.getTypeUser("Passenger",2)}>
                        <div className="img_passenger"></div>
                        <p className="text-center mt-3 who_title">Passenger</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="linkClick" onClick={() => this.getTypeUser("Driver",2)}>
                        <div className="img_driver"></div>
                        <p className="text-center mt-3 who_title">Driver</p>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getTypeUser : (type,step) => {
            dispatch(actions.getType(type,step))
        }
    }
}

export default connect(null,mapDispatchToProps)(Who);