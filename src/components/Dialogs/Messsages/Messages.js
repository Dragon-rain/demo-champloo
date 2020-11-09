import React from 'react'
import Class from './Messages.module.css'

const Messages = (props) => {
    return(
        <div className={Class.message}>
            {props.text}
        </div>

    )
}

export default Messages