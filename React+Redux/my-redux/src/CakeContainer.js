import React from 'react';
import {CakeActions} from '../src/Redux/index';
import { connect } from 'react-redux';

const CakeContainer = (props) =>{
    return(
        <div>
            <h2>Number of Cakes - {props.numberOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
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
        buyCake: ()=> dispatch(CakeActions())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer);