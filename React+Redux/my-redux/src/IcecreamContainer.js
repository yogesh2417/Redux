import React from 'react';

import {IcecreamActions} from './Redux/index';
import { connect } from 'react-redux';


const IcecreamContainer = (props) =>{
    console.log(props)
    return(
        <div>
            <h2>Number of IceCreams - {props.numberOfIcecream}</h2>
            <button onClick={props.buyIcecream}>Buy IceCream</button>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        numberOfIcecream: state.icecream.numberOfIcecream
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        buyIcecream:()=>dispatch(IcecreamActions())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IcecreamContainer);