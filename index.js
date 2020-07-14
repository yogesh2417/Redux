const redux = require('redux');
const reduxLogger =  require('redux-logger');


const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;


const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

function BuyCake(){
    return{
        type: BUY_CAKE,
        info:'first redux app'
    }
}

function BuyIceCream(){
    return{
        type: BUY_ICECREAM,
        info:'first redux app'
    }
}

const InitalCakeState = {
    numberOfCakes: 10
}

const InitialIceCreamState = {
    numberOfIceCream: 20
}

function reducerCake(state = InitalCakeState, Action){
    switch(Action.type){
        case BUY_CAKE:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes - 1
            }
        default: return state
    }
}

function reducerIceCream(state = InitialIceCreamState, Action){
    switch(Action.type){
        case BUY_ICECREAM:
            return {
                ...state,
                numberOfIceCream: state.numberOfIceCream - 1
            }
        default: return state
    }
}

const rootReducers = combineReducers({
    cake:reducerCake,
    iceCream: reducerIceCream
})
const store = createStore(rootReducers, applyMiddleware(logger));
console.log('initial state', store.getState())
console.log('initial cake', store.getState().cake)
console.log('initial iceCream', store.getState().iceCream)
const unsubscribe = store.subscribe(()=> {
    // console.log('updated state', store.getState());
    //         console.log('updated cake',store.getState().cake);
    //         console.log('updated iceCream', store.getState().iceCream);
})
store.dispatch(BuyCake());
store.dispatch(BuyCake());
store.dispatch(BuyCake());
store.dispatch(BuyIceCream());
store.dispatch(BuyIceCream());
unsubscribe();
