import { stopSubmit } from "redux-form";
import { AuthAPI } from "../api/api";

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReduser = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export const setUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}})

export const getUserData = () => async (dispatch) => { /* функция возвращающая другую функцию */
    let response = await AuthAPI.authMe();
    if(response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setUserData(id, email, login, true));
    }        
}

export const login = (email, password, rememberMe) => async (dispatch) => { /* функция возвращающая другую функцию */
    let response = await AuthAPI.login(email, password, rememberMe);
    if(response.data.resultCode === 0) {
        dispatch(getUserData());
    } else {
        console.log(response.data)
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
         dispatch(stopSubmit("login", { _error: message }))
    }
}

export const Logout = () => async (dispatch) => { /* функция возвращающая другую функцию */
    let response = await AuthAPI.logout();
    if(response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false)); 
    }
}

export default authReduser;
