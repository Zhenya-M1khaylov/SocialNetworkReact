import React from 'react';
import {addPost} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {Dispatch} from 'redux';
import {AppRootStateType} from '../../../redux/redux-store';
import {connect} from 'react-redux';
import {PostsPropsType} from '../../../redux/store';

export type mapStateToPropsType = {
    posts: Array<PostsPropsType>
    newPostsText: string
}

export type mapDispatchToPropsType = {
    addPost: (newPostsText: string) => void
}

export type MyPostsType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>


const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostsText: state.profilePage.newPostsText
    } as const
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPost(newPostText))
        }
    } as const
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer;