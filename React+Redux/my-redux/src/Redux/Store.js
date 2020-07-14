import {createStore, combineReducers, applyMiddleware} from 'redux';
import CakeReducer from './Cake/CakeReducer' ;
import IcecreamReducer from './Icecream/IcecreamReducer';
import {createLogger} from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import UserReducer from './User/UserReducer';

const rootReducer = combineReducers({
    cake:CakeReducer,
    icecream:IcecreamReducer,
    user:UserReducer})

const logger = createLogger()

const store = createStore(rootReducer, composeWithDevTools( applyMiddleware(logger, thunk)));

export default store;