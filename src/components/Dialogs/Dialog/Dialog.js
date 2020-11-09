import React from 'react' 
import Class from './Dialog.module.css'
import { NavLink } from 'react-router-dom'

const Dialog = (props) => {
    return(
        <div className={Class.dialog + ' ' + Class.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default Dialog