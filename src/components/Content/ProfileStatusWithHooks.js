import React, { useEffect, useState } from "react";
import Class from './ProfileStatus.module.css'

const ProfileStatusWithHooks = (props) => {

    //let stateWithSetState = useState(true) // return array
    //let editMode = stateWithSetState[0] //первым элементом в массиве находится значение
    //let setEditMode = stateWithSetState[1] //вторым значением находится функция кторая это значение устанавливает

    //используем метод диструктуризации и присвоения (array destructuring assignment)
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    let activateEditMode = () => {
        setEditMode(true)
    }

    let deactivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status)
    }

    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode} >{props.status || 'no status'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true} value={status}></input>
                </div>
            }
        </div>
    )
    
}

export default ProfileStatusWithHooks