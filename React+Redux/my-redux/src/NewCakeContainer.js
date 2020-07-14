import React, { useState } from 'react';
import {CakeActions} from '../src/Redux/index';
import { connect } from 'react-redux';

const NewCakeContainer = (props) =>{
    const [number, setNumber] = useState(1);

    return(
        <div>
            <h2>Number of Cakes - {props.numberOfCakes}</h2>
            <input type='text' value={number} onChange={(e)=> setNumber(e.target.value)}/>
            <button onClick={()=>props.buyCake(number)}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        numberOfCakes: state.cake.numberOfCakes
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        buyCake: (number)=> dispatch(CakeActions(number))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewCakeContainer);