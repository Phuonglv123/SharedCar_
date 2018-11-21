import * as types from '../constants/actionTypes';

let initialState = null

let myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.TYPE_USER:
            state = {
                type: action.nameType,
                step: action.step
            }
            return state;
    
        default:
            return state;
    }
}


export default myReducer;
