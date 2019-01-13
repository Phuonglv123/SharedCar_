import {TYPE_USER} from "../constants/actionTypes";

let initialState = {
    isAuthenticated: false,
    passenger: {}
}

let myReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPE_USER:
            state = {
                type: action.nameType,
                step: action.step
            }
            return {
                ...state,
                isAuthenticated: true,
                passenger:action.payload
            };
    
        default:
            break;
    }
    return state;
}


export default myReducer;
