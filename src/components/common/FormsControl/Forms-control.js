import React from 'react'
import { Field } from 'redux-form';
import Styles from './Forms-control.module.css'

const FormControl = ({input, meta: {touched, error}, children}) => {

    const HasError = touched && error;

    return(
        <div className={Styles.form_control + " " + (HasError? Styles.error : "" )}>
            <div>
                {children}
            </div>
            {HasError && <span>{error}</span>}
        </div>
    )
}

export const TextArea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}> <textarea {...input} {...restProps}/> </FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}> <input {...input} {...restProps}/> </FormControl>
}

export const CreateField = (type, name, placeholder, component, validators, props, text) => (
    <div>
        <Field type={type} name={name} placeholder={placeholder} component={component} validate={validators} {...props}/> {text}
    </div>
)