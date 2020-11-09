import React from 'react'
import { getUserData } from './auth-reduser'

const INITIALIZED_SUCCES = 'INITIALIZED_SUCCES';

let initialState = {
    initialized: false
}

const appReduser = (state = initialState, action) => {
    switch(action.type) {
        case INITIALIZED_SUCCES:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const initializedSucces = () => ({type: INITIALIZED_SUCCES})

export const initializeApp = () => (dispatch) => { /* функция возвращающая другую функцию */
        let promise = dispatch(getUserData())
        promise.then(() => {
            dispatch(initializedSucces())
        });
      
}

export default appReduser;
