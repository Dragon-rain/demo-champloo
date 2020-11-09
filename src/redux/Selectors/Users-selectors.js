import React from 'react'
import { createSelector } from 'reselect';

export const getUsers = (state) => { //примитивный селектор
    return state.usersPage.users;
}

export const getUsersSelector = (state) => { //селектор с фильтрацией использующий примитивный селектор
    return getUsers(state).filter(u => true);
}

export const getUsersSuperSelector = createSelector(getUsers, (users) => { //селектор содержащий логику и использующий библиотеку reselect. Так же может зависить от нескольких селекторов
    return users.filter(u => true); //имитация сложной логики
})

export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}

export const getUsersSuperSelector2 = createSelector(getIsFetching, getUsers, (users, isFetching) => { //Так же может зависить от нескольких селекторов
    return users.filter(u => true); //имитация сложной логики
})

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}



export const getButtonDisable = (state) => {
    return state.usersPage.buttonDisable;
}