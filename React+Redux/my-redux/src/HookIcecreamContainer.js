import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {IcecreamActions} from './Redux/index';

const HookIcecreamContainer = () =>{
    const numberOfIcecream =  useSelector(state => state.icecream.numberOfIcecream);
    const dispatch = useDispatch();
    return(
        <div>
            <h2>Number of Icecreams - {numberOfIcecream}</h2>
            <button onClick={()=> dispatch(IcecreamActions())}>Buy IceCream</button>
        </div>
    )
}

export default HookIcecreamContainer;