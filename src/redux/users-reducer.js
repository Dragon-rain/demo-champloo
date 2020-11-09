import { FollowAPI, UsersAPI } from "../api/api";
import { UpdateObjectsInArray } from "../utils/object-helpers";

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS ='users/SET_USERS';
const SET_CURRENT_PAGE ='users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING';
const BUTTON_DISABLE = 'users/BUTTON_DISABLE';

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    buttonDisable: []

}

const usersReduser = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW: 
            return {
                ...state, 
                users: UpdateObjectsInArray(state.users, action.userId, "id", {followed: true})
                /*users: state.users.map(u => {
                    if(u.id === action.userId){
                        return {...u, followed: true}
                    }
                    return u
                })*/
            };

        case UNFOLLOW: 
            return {
                ...state, 
                users: UpdateObjectsInArray(state.users, action.userId, "id", {followed: false})
            };
        
        case SET_USERS: 
            return {...state, users: action.users}

        case SET_CURRENT_PAGE: 
            return {...state, currentPage: action.currentPage}

        case SET_TOTAL_USERS_COUNT: 
            return {...state, totalUsersCount: action.totalCount}

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}

        case BUTTON_DISABLE: 
            return {
                ...state, 
                buttonDisable: action.disable ? [...state.buttonDisable, action.userId] : state.buttonDisable.filter(id => id !== action.userId)
            }

        default:
            return state;
    }
}

export const follow = (userId) => ({type: FOLLOW, userId}) 
export const unFollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleButtonDisable = (disable, userId) => ({type: BUTTON_DISABLE, disable, userId})

export const requestUsers = (currentPage, pageSize) => {  /* getUersThunkCreator */
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage))
        const response = await UsersAPI.getUsers(currentPage, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(response.data.items));
        dispatch(setTotalUsersCount(response.data.totalCount));
    }
}

const FollowUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleButtonDisable(true ,userId))
    const response = await apiMethod(userId);
    if(response.data.resultCode === 0) {
         dispatch(actionCreator(userId))
    }
    dispatch(toggleButtonDisable(false, userId))
}

export const unFollowThunk = (userId) => {
    return async (dispatch) => {
        let apiMethod = FollowAPI.deleteFollow.bind(FollowAPI);
        let actionCreator = unFollow;
        FollowUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
    }
}

export const FollowThunk = (userId) => async (dispatch) => {
    let apiMethod = FollowAPI.putFollow.bind(FollowAPI)
    let actionCreator = follow;
    FollowUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
}

export default usersReduser
