import * as types from '../constants/actionTypes';

export const changeStatus = () => {
    return {
        type: types.CHANGE_COLOR_NAVBAR
    }
}

export const changeStatusDefault = () => {
    return {
        type: types.CHANGE_COLOR_NAVBAR_DEFAULT
    }
}