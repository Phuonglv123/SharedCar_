
import * as types from '../constants/actionTypes';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

export const getType = (type,step) => {
    return {
        nameType: type,
        step: step,
        type: types.TYPE_USER
    }
}

//Register passenger

export const registerPassenger = (passenger) => dispatch => {
    axios.post('http://localhost:3000/api/passenger/register', passenger)
        .then(res => dispatch({
            type: GET_ERRORS,
            payload: res.data
        }))
        .catch(err => {
            if (err.response) {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                })
            }
        });
};

// login user

export const loginAccount = (account) => (dispatch) => {
    axios.post('http://localhost:3000/api/home/login', account)
        .then(res => {
            console.log(res.data);
            const {token} = res.data;

            localStorage.setItem('jwtToken', res.data.token);
            setAuthToken(token);
            console.log(token)
            const decoded = jwt_decode(token);
            dispatch(setCurrentUser(decoded));
        })
        .catch(err => {
            if (err.response) {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                })
            }
        });
};
export const setCurrentUser = (decoded) => {
    return {
        type: TYPE_USER,
        payload: decoded
    }
};

export const logout = () => dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false)
    dispatch(setCurrentUser({}))
};


