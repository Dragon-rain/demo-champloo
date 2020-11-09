import React from 'react'
import { NavLink } from 'react-router-dom'
import Class from './Header.module.css'
import Preloader from '../common/Preloader/Preloader'

const Header = (props) => {
    return (
        <header className={Class.header}>
            <div className={Class.headerImg}>
                <img src='https://bower.io/img/bower-logo.png' />
                <div className={Class.loginBlock}>
                    {props.isFetching ? <Preloader/> : null}
                    {props.isAuth 
                    ? <div> {props.login} - <button onClick={props.Logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
                </div>
            </div>
        </header>
    )
}

export default Header