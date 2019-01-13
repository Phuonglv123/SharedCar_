import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import myReducer from './reducers/index';

const middleware = [thunk];

const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    myReducer,
    initialState,
    composeEnhancer(applyMiddleware(...middleware)),
)

export default store;