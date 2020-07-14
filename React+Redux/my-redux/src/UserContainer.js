import React, { useEffect } from 'react';
import {fetchUsers} from './Redux/User/UserReducer';
import { connect } from 'react-redux';

const UserContainer = ({users, fetchUser}) =>{
    useEffect(()=>{
        fetchUser()
    },[])


    return users.loading ? (
        <h2>Loading...</h2>
    ):users.error ? (
        <h2>{users.error}</h2>
    ): (
        <div>
            <h2>Users List</h2>
            <div>
                {users && 
                users.users && 
                users.users.map(user=><p>{user.name}</p>)}
            </div>
        </div>
    )

}

const mapStateToProps = state =>{
    return{
        users: state.user
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        fetchUser: ()=>dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserContainer);