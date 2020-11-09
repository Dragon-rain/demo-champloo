import thunkMiddleware from "redux-thunk";
import profileReduser from './profile-reducer';
import dialogsReduser from './dialogs-reducer';
import sidebarReduser from './sidebar-reducer';
import usersReduser from './users-reducer';
import authReduser from './auth-reduser';
import { reducer as formReducer } from 'redux-form'
import appReduser from "./app-reduser";
const { createStore, combineReducers, applyMiddleware } = require("redux");



let redusers = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    sidebar: sidebarReduser,
    usersPage: usersReduser,
    auth: authReduser,
    app: appReduser,
    form: formReducer

})

let store = createStore(redusers, applyMiddleware(thunkMiddleware));

export default store;