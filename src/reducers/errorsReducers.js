import GET_ERRORS from '../constants/actionTypes';
const initialState = {};

const errorsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ERRORS:
            return action.payload;
        default:
            break;
    }
    return state;
};

export default errorsReducer;