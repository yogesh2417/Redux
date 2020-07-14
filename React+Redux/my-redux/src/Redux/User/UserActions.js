import {FETCH_USERS_REQUEST,FETCH_USERS_SUCCESS,FETCH_USERS_FAILURE} from './UserType';


export const UserRequest = () =>{
    return{
        type:FETCH_USERS_REQUEST
    }
}

export const UserSuccess = user =>{
    return{
        type:FETCH_USERS_SUCCESS,
        payload: user
    }
}

export const UserFailure = error =>{
    return{
        type:FETCH_USERS_FAILURE,
        payload:error
    }
}

