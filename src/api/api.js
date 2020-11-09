import React from 'react'
import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "57e26acc-6012-4baf-a78b-a7714e8a1367"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})


export const UsersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`);
    }
}

export const FollowAPI = {
    deleteFollow(userId) {
        return instance.delete(`follow/${userId}`);
    },
    putFollow(userId) {
        return instance.post(`follow/${userId}`);
    }
}

export const AuthAPI = {
    authMe() {
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe=false) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}

export const UserProfileAPI = {
    setUserProfile(userId) {
        return instance.get(`profile/` + userId);
    },
    getUserStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },
    putUserStatus(status) {
        return instance.put(`profile/status/`, {'status': status} );
    }
}