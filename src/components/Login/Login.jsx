import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { required } from '../../utils/validators/validators'
import { CreateField, Input } from '../common/FormsControl/Forms-control'
import {login} from '../../redux/auth-reduser'
import { Redirect } from 'react-router-dom'
import style from '../common/FormsControl/Forms-control.module.css'

const LoginForm = ({handleSubmit, error}) => {
    return (
            <form onSubmit={handleSubmit}>
                {CreateField("text", "email", 'Email', Input, [required])}
                {CreateField("password", "password", 'Password', Input, [required])}
                {CreateField('checkbox', "rememberMe", null, Input, null, "Remember me")}
                {/*<div>
                    <Field type="text" name={"email"} placeholder={'Email'} component={Input} validate={[required]}/>
                </div>
                <div>
                    <Field type="password" name={"password"} placeholder={'Password'} component={Input} validate={[required]}/>
                </div>
                <div>
                    <Field type={'checkbox'} name={"rememberMe"} component={"input"}/> Remember me
                </div>*/}
                {error && <div className = {style.form_summary_error}>
                    {error}
                </div>}
                <div>
                    <button type='submit'>Login</button>
                </div>
            </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {

    const OnSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth) { 
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={OnSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);