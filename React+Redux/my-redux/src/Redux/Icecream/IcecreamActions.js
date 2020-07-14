import {BUY_ICECREAM} from './IcecreamType';

export const IcecreamActions = (number) =>{
    return{
        type: BUY_ICECREAM,
        payload: number
    }
}