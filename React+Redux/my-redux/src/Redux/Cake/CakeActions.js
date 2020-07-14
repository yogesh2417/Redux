import {BUY_CAKE}  from './CakeTypes';

export const CakeActions = (number) =>{
    return{
        type: BUY_CAKE,
        payload: number
    }
}