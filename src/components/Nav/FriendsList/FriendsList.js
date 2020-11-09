import React from 'react'
import Class from './FriendsList.module.css'

const FriensList = (props) => {
    return(
        <div className={Class.friend}>
            <div className={Class.profilePhoto}>
                <img src={props.photo}/>
            </div>
            <div className = {Class.name}>
                {props.name}
            </div>
        </div>
    )
}

export default FriensList