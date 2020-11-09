import { UserProfileAPI } from "../api/api";

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';

let initialState = {
        posts: [
            {id: 1, text: 'post about TicTok', likesCount: 2},
            {id: 2, text: 'post about apple', likesCount: 3},
            {id: 3, text: 'post about google', likesCount: 5},
            {id: 4, text: 'post about instagram', likesCount: 7}
        ],
        profile: null,
        status: ''
}

const _addPost = (state, text) => {
    let newPost = {
        id: state.posts[state.posts.length-1].id + 1,
        text: text,
        likesCount: 0
    }

    let stateCopy = {
        ...state,
        posts: [...state.posts, newPost]
    };
    return stateCopy;
}

const _setUserProfile = (state, profile) => {
    let stateCopy = {
        ...state,
        profile: profile
    }
    return stateCopy;
}

const _setStatus = (state, status) => {
    let stateCopy = {
        ...state,
        status: status
    }
    return stateCopy;
}

const profileReduser = (state = initialState, action) => {

    switch(action.type) {

        case ADD_POST: 
            return _addPost(state, action.newPost);
        case SET_USER_PROFILE: 
            return _setUserProfile(state, action.profile);
        case SET_STATUS:
            return _setStatus(state, action.status);
        default:
            return state;
    }

}

export const addPostActionCreator = (newPost) => {
    return {
        type: ADD_POST,
        newPost
    }
}

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})

export const getUserProfile = (userId) => {
    return async (dispatch) => {
        const response = await UserProfileAPI.setUserProfile(userId);
        dispatch(setUserProfile(response.data));
    }
}

export const getUserStatus = (userId) => {
    return async (dispatch) => {
        if(!userId) userId = 2;
        const response = await UserProfileAPI.getUserStatus(userId);
        dispatch(setStatus(response.data));
    }
}

export const updateUserStatus = (status) => async (dispatch) => {
    const response = await UserProfileAPI.putUserStatus(status);
    if(response.data.resultCode === 0 ){
        dispatch(setStatus(status));
    }
    
}


export default profileReduser;