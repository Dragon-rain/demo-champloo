import React from 'react'
import Class from './Users.module.css'
import UsersPhoto from '../../assets/images/user_generic2_black.png'
import { NavLink } from 'react-router-dom';
import Paginator from '../common/Paginator/Paginator';
import User from './User';


let Users = ({totalUsersCount, pageSize, currentPage, onPageChanged, users, unFollowThunk, FollowThunk, buttonDisable, ...props}) => {

    return (
        <div>
            <Paginator totalItemsCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage} onPageChanged={onPageChanged}/>
            {users.map(u => (
                <User key={u.id} user={u} buttonDisable={buttonDisable} unFollowThunk={unFollowThunk} FollowThunk={FollowThunk}/>
            ))}

        </div>
    )

}

export default Users