import React from 'react'
import Class from './Users.module.css'
import UsersPhoto from '../../assets/images/user_generic2_black.png'
import { NavLink } from 'react-router-dom';


let User = ({user, buttonDisable, unFollowThunk, FollowThunk}) => {
    return (
        <div>
            <div>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img className={Class.usersPhoto} src={user.photos.small != null ? user.photos.small : UsersPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {user.followed ? 
                        <button disabled = {buttonDisable.some(id => id === user.id)} onClick={()=> {
                            unFollowThunk(user.id);
                            }}>Unfollow</button>: 
                        <button disabled = {buttonDisable.some(id => id === user.id)} onClick={() => {
                            FollowThunk(user.id);
                        }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>
                            {user.name}
                        </div>
                         <div>
                            {user.status}
                        </div>
                    </span>
                    <span>
                        <div>
                            {"user.location.country"}
                        </div>
                        <div>
                            {"user.location.city"}
                        </div>
                    </span>
                </span>
            </div>

        </div>
    )

}

export default User