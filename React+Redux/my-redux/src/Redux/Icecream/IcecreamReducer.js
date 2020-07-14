import {BUY_ICECREAM} from './IcecreamType';


const initialState={
    numberOfIcecream:20
}

const IcecreamReducer = (state = initialState, action) =>{
    switch(action.type){
        case BUY_ICECREAM:
            return{
                ...state,
                numberOfIcecream: state.numberOfIcecream - action.payload
            }
        default: return state
    }

}

export default IcecreamReducer;