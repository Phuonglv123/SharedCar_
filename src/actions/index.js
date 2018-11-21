import * as types from '../constants/actionTypes';

export const getType = (type,step) => {
    return {
        nameType: type,
        step: step,
        type: types.TYPE_USER
    }
}

