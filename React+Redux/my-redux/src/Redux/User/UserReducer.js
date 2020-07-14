import {FETCH_USERS_REQUEST,FETCH_USERS_SUCCESS,FETCH_USERS_FAILURE} from './UserType';
import {UserRequest,UserSuccess,UserFailure} from './UserActions';
import axios from 'axios';

const initialState = {
    loading: false,
    users:[],
    error:''
}

const UserReducer = (state=initialState, action) =>{
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return{
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return{
                loading: false,
                users: action.payload,
                error:''
            }
        case FETCH_USERS_FAILURE:
            return{
                loading: false,
                users: [],
                error: action.payload
            }
        default: return state
    }
}

export default UserReducer;

export const fetchUsers =()=>{
    return (dispatch)=>{
        dispatch(UserRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res=>{
                const users = res.data;
                dispatch(UserSuccess(users));
            })
            .catch(err=>{
                const error = err.message;
                dispatch(UserFailure(error));
            })
    }
}