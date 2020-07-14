import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {CakeActions} from '../src/Redux/index';

const HookCakeContainer = () =>{
   const numberOfCakes = useSelector(state=> state.cake.numberOfCakes);
   const dispatch = useDispatch();
    return(
        <div>
            <h2>Number of Cakes - {numberOfCakes}</h2>
            <button onClick={()=> dispatch(CakeActions())}>Buy Cake</button>
        </div>
    )
}

export default HookCakeContainer;