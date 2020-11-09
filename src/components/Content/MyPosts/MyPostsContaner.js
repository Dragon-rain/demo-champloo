import React from 'react'
import { connect } from 'react-redux';
import { addPostActionCreator, newPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostState: state.profilePage.newPostState
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPost) => {
            dispatch(addPostActionCreator(newPost));
        }
    }
}

const MyPostsContaner = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContaner