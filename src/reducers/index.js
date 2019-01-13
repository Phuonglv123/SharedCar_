import { combineReducers } from 'redux';
import typeRegister from './typeRegister';
import errorsReducer from './errorsReducers';

const myReducer = combineReducers({
    typeRegister,
    errorsReducer,

});

export default myReducer;