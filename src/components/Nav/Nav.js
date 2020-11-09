import React from 'react'
import { NavLink } from 'react-router-dom'
import FriensList from './FriendsList/FriendsList'
import Class from './Nav.module.css'

const Nav = (props) => {
    return(
        <nav className={Class.nav}>
         <div className={`${Class.item} ${Class.active}`}>
           <NavLink to='/profile' activeClassName={Class.active}>Profile</NavLink>
         </div>
         <div className={Class.item}>
           <NavLink to='/dialogs' activeClassName={Class.active}>Messages</NavLink>
         </div>
         <div className={Class.item}>
           <NavLink to='/news' activeClassName={Class.active}>News</NavLink>
         </div>
         <div className={Class.item}>
           <NavLink to='/music' activeClassName={Class.active}>Music</NavLink>
         </div>
         <div className={Class.item}>
           <NavLink to='/setings' activeClassName={Class.active}>Setings</NavLink>
         </div>
         <div className={Class.item}>
           <NavLink to='/users' activeClassName={Class.active}>Users</NavLink>
         </div>
         <div className={Class.item}>
           <div className={Class.friends}>Friends:</div>
           {props.friends.map((friends, index)=> {
              return <FriensList photo={friends.photo} name={friends.name} key={friends.id}/>
            })}
           
         </div>
       </nav>
    )
}

export default Nav