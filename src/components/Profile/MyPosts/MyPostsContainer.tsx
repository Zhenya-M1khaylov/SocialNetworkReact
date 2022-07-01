import React from 'react';
import {addPostAC, onPostChangeAC} from '../../../redux/profile-reducer';
import {ActionsTypes, PostsPropsType} from '../../../redux/store';
import MyPosts from './MyPosts';
import {Dispatch, Store} from 'redux';
import StoreContext from '../../../StoreContext';

export type MyPostsContainerPropsType = {
    // posts: Array<PostsPropsType>
    // addPost: (postMessage: string) => void
    // newPostsText: string
    // updateNewPostsCallBack: (newText: string) => void
    // dispatch: (action: ActionsTypes) => void
    // store: Store
    // dispatch: Dispatch
}


const MyPostsContainer: React.FC<MyPostsContainerPropsType> = (props) => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                const state = store.getState()
                const addPost = () => {
                    // props.addPost(props.newPostsText)
                    // props.dispatch({type: 'ADD-POST', postMessage: props.newPostsText})
                    store.dispatch(addPostAC(state.profilePage.newPostsText))
                }

                let onPostChange = (newText: string) => {
                    // props.updateNewPostsCallBack(e.currentTarget.value)
                    // props.dispatch(onPostChangeAC(e.currentTarget.value))
                    let action = onPostChangeAC(newText)
                    store.dispatch(action)
                }

                return <MyPosts
                    posts={state.profilePage.posts}
                    newPostsText={state.profilePage.newPostsText}
                    // dispatch={props.dispatch}
                    updateNewPostsCallBack={onPostChange}
                    addPost={addPost}
                />}
            }
        </StoreContext.Consumer>
    );
};

export default MyPostsContainer;