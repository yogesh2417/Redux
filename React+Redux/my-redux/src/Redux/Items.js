import React from 'react';
import { connect } from 'react-redux';
import {CakeActions} from './index';
import {IcecreamActions} from './index';

const Items = (props) =>{
    const number = 1;
    return(
        <div>
            Items - {props.item}
            <button onClick={()=>props.buyItem(number)}>Buy Item</button>
        </div>
    )
}

const mapStateToProps = (state,ownProps) =>{
    const totalItems =  ownProps.cake ?  state.cake.numberOfCakes : state.icecream.numberOfIcecream;
    return{
        item: totalItems
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    const dispatchFunc = ownProps.cake ? 
    (number)=>dispatch(CakeActions(number)) :
    (number)=>dispatch(IcecreamActions(number));

    return{
        buyItem: dispatchFunc
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Items);