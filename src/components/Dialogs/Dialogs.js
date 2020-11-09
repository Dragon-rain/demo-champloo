import React from 'react'
import Class from './Dialogs.module.css'
import Messages from './Messsages/Messages'
import Dialog from './Dialog/Dialog'
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../utils/validators/validators'
import { TextArea } from '../common/FormsControl/Forms-control'

const MaxLength20 = maxLengthCreator(20);

const DialogsForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"mesage"} component={TextArea} placeholder="new mesage" validate={[required, MaxLength20]}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
} 

const MesageReduxForm = reduxForm({form: 'mesage'})(DialogsForm)

const Dialogs = (props) => {

    let addMessage = (text) => {
        props.addMessage(text);
    }

    const OnSubmit = (formData) => {
        addMessage(formData.mesage);
        console.log(formData.mesage);
    }

    return (
        <div className={Class.dialogs}>
            <div className={Class.dialogsItem}>
                {props.state.people.map(people => {
                    return <Dialog name={people.name} id={people.id} key={people.id}/>
                })}
            </div>
            <div className={Class.messages}>
                {props.state.messages.map(message => {
                    return <Messages text={message.text} key={message.id}/>
                })}
            </div>
            <MesageReduxForm onSubmit={OnSubmit}/>
        </div>
    )
}

export default Dialogs