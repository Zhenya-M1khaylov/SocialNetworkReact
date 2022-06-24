import React from 'react';
import {addPostAC, onPostChangeAC} from '../../../redux/profile-reducer';
import {ActionsTypes, PostsPropsType} from '../../../redux/store';
import MyPosts from './MyPosts';
import {Dispatch, Store} from 'redux';

export type MyPostsContainerPropsType = {
    // posts: Array<PostsPropsType>
    // addPost: (postMessage: string) => void
    // newPostsText: string
    // updateNewPostsCallBack: (newText: string) => void
    // dispatch: (action: ActionsTypes) => void
    store: Store
    dispatch: Dispatch
}


const MyPostsContainer: React.FC<MyPostsContainerPropsType> = (props) => {

    const state = props.store.getState()

    const addPost = () => {
        // props.addPost(props.newPostsText)
        // props.dispatch({type: 'ADD-POST', postMessage: props.newPostsText})
        props.dispatch(addPostAC(state.profilePage.newPostsText))
    }

    let onPostChange = (newText: string) => {
        // props.updateNewPostsCallBack(e.currentTarget.value)
        // props.dispatch(onPostChangeAC(e.currentTarget.value))
        let action = onPostChangeAC(newText)
        props.dispatch(action)
    }

    return (
        <MyPosts
            posts={state.profilePage.posts}
            newPostsText={state.profilePage.newPostsText}
            dispatch={props.dispatch}
            updateNewPostsCallBack={onPostChange}
            addPost={addPost}
        />
    );
};

export default MyPostsContainer;